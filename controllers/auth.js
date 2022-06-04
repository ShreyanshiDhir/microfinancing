const asyncHandler = require("../middleware/async");
const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const { customAlphabet } = require("nanoid");
const sendEmail = require("../utils/sendEmail");
const Loan = require("../models/Loan");

// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
	const {
		f_name,
		l_name,
		dob,
		email,
		phone,
		location,
		city,
		state,
		pin,
		borrower_type,
		ref_id,

		otp,
	} = req.body;

	const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
	const nanoid = customAlphabet(alphabet, 5);
	var n_ref_id;
	ref_id ? (n_ref_id = ref_id) : (n_ref_id = "123456");

	var status = "inactive";

	var password = Math.random().toString(36).slice(-8);
	console.log(password);

	// Create User
	const newuser = await User.create({
		uuid: nanoid(),
		f_name,
		l_name,
		email,
		ref_id: n_ref_id,
		dob,
		phone,
		location,
		city,
		state,
		pin,
		borrower_type,
		user_type: "borrower",
		status,
		otp,
		password,
	});
	await sendTokenResponse(newuser, 200, res);
	// await sendEmail({
	// 	email,
	// 	subject: "Registered Successfully on ...",
	// 	message: `Hi, ${req.body.name} your registration has been successful. Your password is ${password}. You may go ahead and complete your profile as the link below. \n https://localhost:3000/dashboard/my-profile`,
	// });

	await Loan.create({
		user: newuser._id,
		minimum_amount: "100",
		maximum_amount: "800",
		minimum_duration: "1",
		maximum_duration: "2",
		duration_type: "months",
		status: "unpaid",
	});
});

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	// Validate email & password
	if (!email || !password) {
		return next(
			new ErrorResponse("Please provide an email and password", 400)
		);
	}

	// Check for user
	const user = await User.findOne({ email }).select("+password");

	if (!user) {
		return next(new ErrorResponse("Invalid credentials", 401));
	}

	// Check if password matches
	const isMatch = await user.matchPassword(password);

	if (!isMatch) {
		return next(new ErrorResponse("Invalid credentials", 401));
	}

	sendTokenResponse(user, 200, res);
});

// @desc      Update user details
// @route     PUT /api/v1/auth/updatedetails
// @access    Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
	const fieldsToUpdate = {
		email: req.body.email,
		phone: req.body.phone,
	};

	const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		success: true,
		data: user,
	});
});

// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
	// user is already available in req due to the protect middleware
	const user = req.user;

	res.status(200).json({
		success: true,
		data: user,
	});
});

// Get token from model and send response
const sendTokenResponse = (user, statusCode, res) => {
	// Create token
	const token = user.getSignedJwtToken();

	res.status(statusCode).json({
		success: true,
		token,
	});
};
