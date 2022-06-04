const mongoose = require("mongoose");

const CardDetailsSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	name_of_card_holder: {
		type: String,
		required: true,
	},
	card_number: {
		type: String,
		required: true,
	},
	expiry: {
		type: String,
		required: true,
	},
	cvv: {
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

module.exports = CardDetails = mongoose.model("carddetails", CardDetailsSchema);
