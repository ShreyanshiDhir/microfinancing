const mongoose = require("mongoose");

const EkycSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	adhaar: {
		type: String,
		default: "no-adhaar.jpg",
	},
	college_id: {
		type: String,
		default: "no-college-id.jpg",
	},
	photo: {
		type: String,
		default: "no-photo.jpg",
	},
	photo_verified: {
		type: String,
	},
	adhaar_verified: {
		type: String,
	},
	college_id_verified: {
		type: String,
	},
	phone_verified: {
		type: String,
	},
});

module.exports = Ekyc = mongoose.model("ekyc", EkycSchema);
