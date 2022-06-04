//user, date, loan_amount, loan_duration, loan_status

const mongoose = require("mongoose");

const UserLoanSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	date: {
		type: Date,
		default: Date.now,
	},
	loan_amount: {
		type: String,
		required: true,
	},
	loan_duration: {
		type: String,
		required: true,
	},
	interest_percent: {
		type: String,
		required: true,
	},
	late_fees: {
		type: String,
		required: true,
	},
	pending_amount: {
		type: String,
		required: true,
	},
	processing_fees: {
		type: String,
		required: true,
	},
	loan_status: {
		//paid or pending
		type: String,
		required: true,
	},
	deleted: {
		type: String,
		required: true,
	},
});

module.exports = UserLoan = mongoose.model("userloan", UserLoanSchema);
