const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
	getAllProfiles,
	getUserProfile,
	getMyProfile,
	createProfile,
	editProfile,
	deleteProfile,
	getAllDocProfiles,
	getMyDocProfile,
	updateProfile,
	createDocProfile,
	getDocUserProfile,
} = require("../controllers/profile");

router.use(protect);

// USER

//get all profiles
router.get("/", getAllProfiles);

//get my profile
router.get("/me", getMyProfile);

//get profile by user id
router.get("/:userId", getUserProfile);

//create profile
router.post("/", createProfile);

//edit profile
router.put("/", editProfile);

// //edit profile by admin
// router.put("/:id", updateProfile);

//delete profile
router.delete("/", deleteProfile);

module.exports = router;
