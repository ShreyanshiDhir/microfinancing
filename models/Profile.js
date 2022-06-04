const mongoose = require("mongoose");

// user, f_name, l_name, dob, location, city, state, pin

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	f_name: {
		type: String,
		required: true,
	},
	l_name: {
		type: String,
		required: true,
	},
	dob: {
		type: String,
		required: true,
	},

	location: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	pin: {
		type: String,
		required: true,
	},
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
