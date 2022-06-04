const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	minimum_amount: {
		type: String,
		required: true,
	},
	maximum_amount: {
		type: String,
		required: true,
	},

	minimum_duration: {
		type: String,
		required: true,
	},
	maximum_duration: {
		type: String,
		required: true,
	},
	duration_type: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

module.exports = Loan = mongoose.model("loan", LoanSchema);
