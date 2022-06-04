const jwt = require("jsonwebtoken");
const config = require("config");
const asyncHandler = require("./async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
// Protect routes
exports.adminprotect = asyncHandler(async (req, res, next) => {
	//Get token from header
	const token = req.header("x-auth-token");
	// console.log(token)
	if (!token) {
		return next(
			new ErrorResponse("Not authorized to access this route", 401)
		);
	}

	//Verfiy Token
	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"));
		// console.log(decoded);
		req.user = await User.findById(decoded.id);
		if (req.user.user_type != "admin") {
			return next(
				new ErrorResponse("Only admin authorised for this route", 401)
			);
		}
		next();
	} catch (err) {
		return next(
			new ErrorResponse("Not authorized to access this route", 401)
		);
	}
});
