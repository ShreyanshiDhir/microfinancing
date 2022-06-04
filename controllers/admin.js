const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Profile = require("../models/Profile");
const Bank = require("../models/Bank");
const Ekyc = require("../models/Ekyc");
const Loan = require("../models/UserLoan");
const { customAlphabet } = require("nanoid");
const UserLoan = require("../models/UserLoan");

// @desc      create new user
// @route     POST api/admin/createuser
// @access    Private
exports.createUser = asyncHandler(async (req, res, next) => {
	const {
		email,
		phone,
		borrower_type,
		ref_id,

		user_type,
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
	const user = await User.create({
		uuid: nanoid(),
		phone,
		email,
		ref_id: n_ref_id,

		borrower_type,
		user_type,
		status,
		otp: "0000",
		password,
	});
	res.json(user);
	// await sendTokenResponse(user, 200, res);
	// await sendEmail({
	// 	email,
	// 	subject: "Registered Successfully on ...",
	// 	message: `Hi, ${req.body.name} your registration has been successful. Your password is ${password}. You may go ahead and complete your profile as the link below. \n https://localhost:3000/dashboard/my-profile`,
	// });
});

// @desc      update status
// @route     PUT api/admin/updatestatus
// @access    Private

exports.updateStatus = asyncHandler(async (req, res, next) => {
	var new_status;
	if (req.body.curr_status === "active") {
		new_status = "inactive";
	} else {
		new_status = "active";
	}

	const fieldsToUpdate = {
		status: new_status,
	};
	console.log("new status", new_status);
	console.log("body", req.body);
	const user = await User.findByIdAndUpdate(req.body.id, fieldsToUpdate, {
		new: true,
		runValidators: true,
	});
	console.log("user", user);
	res.status(200).json({
		success: true,
		data: user,
	});
});

// // @desc      Update user details
// // @route     PUT api/admin/updateUser
// // @access    Private
// exports.updateUser = asyncHandler(async (req, res, next) => {
// 	const fieldsToUpdate = {
// 		f_name: req.body.f_name,
// 		l_name: req.body.l_name,
// 		email: req.body.email,
// 		dob: req.body.dob,
// 		location: req.body.location,
// 		city: req.body.city,
// 		state: req.body.state,
// 		pin: req.body.pin,
// 		// age: req.body.age,
// 	};

// 	const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
// 		new: true,
// 		runValidators: true,
// 	});

// 	res.status(200).json({
// 		success: true,
// 		data: user,
// 	});
// });

//@desc   update profile
//@route  PUT /api/admin/:id
//@access private
exports.updateProfile = asyncHandler(async (req, res, next) => {
	let profile = await Profile.findOne({ user: req.params.id });

	if (!profile)
		return next(new ErrorResponse("The profile is not yet created", 400));

	await profile.update(req.body);
	res.status(200).json({
		success: true,
		data: "Profile updated",
	});
});

// @desc      list all users
// @route     GET api/admin/listusers
// @access    Private
exports.listUsers = asyncHandler(async (req, res, next) => {
	const users = await User.find();
	res.status(200).json({
		success: true,
		count: users.length,
		data: users,
	});
});

//@desc get  profile of user
//@route  GET api/admin/userprofile/:userId
//@access private
exports.getUser = asyncHandler(async (req, res, next) => {
	const profile = await Profile.findOne({ user: req.params.userId });
	res.status(200).json({ success: true, data: profile });
});

//@desc delete profile of a user
//@route  DELETE api/admin/profile/:userId
//@access private
exports.deleteUser = asyncHandler(async (req, res, next) => {});

//@desc add a new bank
//@route  POST api/admin/addbank
//@access private
exports.addNewBank = asyncHandler(async (req, res, next) => {
	const { state, city, bank_name, bank_branch, iifc, bank_address } =
		req.body;
	const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";
	const nanoid = customAlphabet(alphabet, 5);

	var status = "inactive";

	// Create User
	const bank = await Bank.create({
		uuid: nanoid(),
		state,
		city,
		bank_name,
		bank_branch,
		iifc,
		bank_address,
		status,
	});
	res.json(bank);
});

// @desc      list all banks
// @route     GET api/admin/listbanks
// @access    Private
exports.listBanks = asyncHandler(async (req, res, next) => {
	const banks = await Bank.find();
	res.status(200).json({
		success: true,
		count: banks.length,
		data: banks,
	});
});

//@desc upload adhaar card
//@route  PUT api/admin/uploadadhaar/:id
//@access private

exports.uploadAdhaar = asyncHandler(async (req, res, next) => {
	const user = await Ekyc.findById({ user_id: req.params.id });

	if (!user) {
		return next(
			new ErrorResponse(`User not found with id of ${req.params.id}`, 404)
		);
	}

	// Make sure user is bootcamp owner
	// if (bootcamp.user.toString() !== req.user.id && req.user.role !== "admin") {
	// 	return next(
	// 		new ErrorResponse(
	// 			`User ${req.user.id} is not authorized to update this bootcamp`,
	// 			401
	// 		)
	// 	);
	// }

	if (!req.files) {
		return next(new ErrorResponse(`Please upload a file`, 400));
	}

	const file = req.files.file;

	// Make sure the image is a photo
	if (!file.mimetype.startsWith("image")) {
		return next(new ErrorResponse(`Please upload an image file`, 400));
	}

	// Check filesize
	if (file.size > 1000000) {
		return next(
			new ErrorResponse(`Please upload an image less than 1000000`, 400)
		);
	}

	// Create custom filename
	file.name = `adhaar_${req.params.id}${path.parse(file.name).ext}`;

	file.mv(`./public/uploads/${file.name}`, async (err) => {
		if (err) {
			console.error(err);
			return next(new ErrorResponse(`Problem with file upload`, 500));
		}

		await Ekyc.findByIdAndUpdate(user._id, { adhaar: file.name });

		res.status(200).json({
			success: true,
			data: file.name,
		});
	});
});

// @desc      list all loans
// @route     GET api/admin/view-loans
// @access    Private

exports.viewLoans = asyncHandler(async (req, res, next) => {
	const loans = await UserLoan.find();
	res.status(200).json({
		success: true,
		count: loans.length,
		data: loans,
	});
});

// @desc      list all loans to be approved
// @route     GET api/admin/unapproved-loans
// @access    Private
exports.viewNonLoans = asyncHandler(async (req, res, next) => {
	let loans = await UserLoan.find({ loan_status: "pending" }).populate(
		"user"
	);
	res.status(200).json({
		success: true,
		count: loans.length,
		data: loans,
	});
});

// @desc      get loan details of a user
// @route     GET api/admin/loan-details/:id
// @access    Private
exports.loanDetails = asyncHandler(async (req, res, next) => {
	let loan = await Loan.findOne({ user: req.params.id });

	res.status(200).json({ success: true, data: loan });
});

//@desc get loans of a user
//@route  GET api/admin/get-loans-by-id/:id
//@access private
exports.getLoansOfUsers = asyncHandler(async (req, res, next) => {
	const loans = await UserLoan.find({ user: req.params.id });
	res.status(200).json({ success: true, data: loans });
});

//@desc   update user status
//@route  PUT /api/admin/update-user-status/:id
//@access private
exports.updateUserStatus = asyncHandler(async (req, res, next) => {
	let status = await Profile.findOne({ user: req.params.id });

	if (!status) return next(new ErrorResponse("No status yet", 400));

	await status.update(req.body);
	res.status(200).json({
		success: true,
		data: "Status updated",
	});
});

//@desc get  status of user
//@route  GET api/admin/get-status-by-id/:id
//@access private
exports.getStatus = asyncHandler(async (req, res, next) => {
	const loan = await Loan.findOne({ user: req.params.id });
	res.status(200).json({ success: true, data: loan });
});
