const mongoose = require("mongoose");

const EmiSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "signup",
	},
	loan_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "userloan",
	},
	number_of_emi: {
		type: String,
		required: true,
	},
	emi_amount: {
		type: String,
		required: true,
	},
});

module.exports = Emi = mongoose.model("emi", EmiSchema);
