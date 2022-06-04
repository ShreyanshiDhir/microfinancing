const mongoose = require("mongoose");

const RewardsBurnSchema = new mongoose.Schema({
	reward_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "rewards",
	},
	reward_burn_date: {
		type: Date,
		default: Date.now,
		required: true,
	},
	reward_burn_amount: {
		type: String,
		required: true,
	},
	on_account_of: {
		type: String,
		required: true,
	},
});

module.exports = RewardsBurn = mongoose.model("rewardsburn", RewardsBurnSchema);
