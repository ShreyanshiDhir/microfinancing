const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const UserLoan = require("../models/UserLoan");
const Loan = require("../models/Loan");
const { profile_url } = require("gravatar");
const { adsense_v2, apikeys_v2 } = require("googleapis");

//@desc ask for loan
//@route  POST /api/users/request-loan
//@access private
exports.getLoan = asyncHandler(async (req, res, next) => {
	const thisuser = req.user.id;
	const { loan_amount } = req.body;

	var loan_duration = "1";
	var interest_percent = "1.5";
	var late_fees = "0";
	var number = parseInt(loan_amount);
	var pending_amount = (number * 1.5) / 100 + number;
	var processing_fees = "0";
	var loan_status = "pending";
	var deleted = "false";

	const newuser = await UserLoan.create({
		user: thisuser,
		loan_amount,
		loan_duration,
		interest_percent,
		late_fees,
		pending_amount,
		processing_fees,
		loan_status,
		deleted,
	});

	// const newuser = await UserLoan.create(req.body);

	res.status(200).json({ success: true, data: "Loan granted" });
});

//@desc get the loan status
//@route  GET /api/users/view-loans
//@access private

exports.viewLoan = asyncHandler(async (req, res, next) => {
	const loan = await UserLoan.find({ user: req.user.id });
	res.status(200).json({ success: true, data: loan });
});

//@desc get the loan details
//@route  GET /api/users/loan-details
//@access private

exports.loanDetails = asyncHandler(async (req, res, next) => {
	const loan = await Loan.findOne({ user: req.user.id });
	res.status(200).json({ success: true, data: loan });
});

//@desc get loan by id
//@route  POST /api/users/view-loan/:id
//@access private
exports.getLoanById = asyncHandler(async (req, res, next) => {
	const userloan = await UserLoan.findOne({ _id: req.params.id });
	res.status(200).json({ success: true, data: userloan });
});

//@desc payback loan
//@route  POST /api/users/payback/:id
//@access private

exports.payLoan = asyncHandler(async (req, res, next) => {
	const profileFields = {};
	profileFields.pending_amount = "0";
	profileFields.loan_status = "paid";
	await UserLoan.findOneAndUpdate(
		{ _id: req.params.id },
		{ $set: profileFields },
		{ new: true }
	);
	const userloan = await UserLoan.findOne({ _id: req.params.id });
	res.status(200).json({ success: true, data: userloan });
});
