const mongoose = require("mongoose");

const BankDetailsSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	name: {
		type: String,
		required: true,
	},
	iifc_code: {
		type: String,
		required: true,
		unique: true,
	},
	account_number: {
		type: String,
		required: true,
		unique: true,
	},
	bank_address: {
		type: String,
		required: true,
	},
	verified: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	deleted: {
		type: String,
		required: true,
	},
});

module.exports = BankDetails = mongoose.model("bankdetails", BankDetailsSchema);
