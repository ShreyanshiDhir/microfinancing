const mongoose = require("mongoose");

const RefferalSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "signup",
	},
	ref_code: {
		type: String,
	},
	ref_amount: {
		type: String,
	},
	ref_user: {
		type: String,
	},
	ref_date: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: String,
		required: true,
	},
});

module.exports = Refferal = mongoose.model("refferal", RefferalSchema);
