const mongoose = require("mongoose");

const RepaymentSchema = new mongoose.Schema({
	emi_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "emi",
	},
	emi_date: {
		type: Date,
		required: true,
	},
	emi_amount: {
		type: String,
		required: true,
	},
	emi_interest: {
		type: String,
		required: true,
	},
	paid: {
		type: String,
		required: true,
	},
	late_payment: {
		type: String,
	},
	emi_days_margin: {
		type: String,
		required: true,
	},
});

module.exports = Repayment = mongoose.model("repayment", RepaymentSchema);
