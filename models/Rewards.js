const mongoose = require("mongoose");

const RewardsSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "signup",
	},
	reward_date: {
		type: Date,
		default: Date.now,
		required: true,
	},
	on_account_of: {
		type: String,
		required: true,
	},
	reward_amount: {
		type: String,
		required: true,
	},
	valid_till: {
		type: Date,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

module.exports = Rewards = mongoose.model("rewards", RewardsSchema);
