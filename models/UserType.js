const mongoose = require("mongoose");

const UserTypeSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	ut_name: {
		type: String,
		required: true,
	},
	ut_id_ref: {
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

module.exports = UserType = mongoose.model("usertype", UserTypeSchema);
