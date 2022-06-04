const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtSecret = config.get("jwtSecret");

const UserSchema = new mongoose.Schema({
	uuid: {
		type: String,
		required: [true, "Please add uuid"],
		unique: true,
	},

	email: {
		type: String,
		required: [true, "Please add an email"],
		unique: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please add a valid email",
		],
	},

	password: {
		type: String,
		required: [true, "Please add a password"],
		minlength: 6,
		select: false,
	},
	phone: {
		type: String,
		required: true,
	},

	borrower_type: {
		type: String,
		required: true,
	},

	user_type: {
		type: String,
		default: "user",
		enum: ["borrower", "official", "admin"],
	},
	ref_id: {
		type: String,
		required: true,
	},
	status: {
		type: String, //active/inactive/blocked/locked
		required: true, // ya/n/c c is required to change password on first login
	},
	otp: {
		type: String,
		required: true,
	},
	// avatar: {
	// 	type: String,
	// },
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
	if (!this.isModified("password")) {
		next();
	}

	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
	return jwt.sign({ id: this._id }, jwtSecret, {
		expiresIn: 360000,
	});
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
	return await bcrypt.compare(enteredPassword, this.password);
};

// Generate and hash password token
UserSchema.methods.getResetPasswordToken = function () {
	// Generate token
	const resetToken = crypto.randomBytes(20).toString("hex");

	// Hash token and set to resetPasswordToken field
	this.resetPasswordToken = crypto
		.createHash("sha256")
		.update(resetToken)
		.digest("hex");

	// Set expire
	this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;

	return resetToken;
};

module.exports = User = mongoose.model("user", UserSchema);
