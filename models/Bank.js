const mongoose = require("mongoose");

// state, city, bank_name, bank_branch, iifc, bank_address

const BankSchema = new mongoose.Schema({
	uuid: {
		type: String,
		required: [true, "Please add uuid"],
		unique: true,
	},

	state: {
		type: String,
		required: true,
	},

	city: {
		type: String,
		required: true,
	},

	bank_name: {
		type: String,
		required: true,
	},

	bank_branch: {
		type: String,
		required: true,
	},

	iifc: {
		type: String,
		required: true,
	},
	bank_address: {
		type: String,
		required: true,
	},
	status: {
		type: String, //active/inactive/blocked/locked
		required: true,
	},
});

module.exports = Bank = mongoose.model("bank", BankSchema);
