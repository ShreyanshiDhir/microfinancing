const express = require("express");
const {
	createUser,
	updateStatus,
	updateUser,
	listUsers,
	getUser,
	deleteUser,
	addNewBank,
	uploadAdhaar,
	listBanks,
	updateProfile,
	viewLoans,
	viewNonLoans,
	loanDetails,
	getLoansOfUsers,
	updateUserStatus,
	getStatus,
} = require("../controllers/admin");
const { adminprotect } = require("../middleware/adminAuth");
const router = express.Router();

router.post("/createuser", adminprotect, createUser);
router.put("/updatestatus", adminprotect, updateStatus);
// router.put("/updateuser", adminprotect, updateUser);
router.get("/listusers", adminprotect, listUsers);
router.get("/deleteuser", adminprotect, deleteUser);
router.get("/userprofile/:userId", adminprotect, getUser);
//edit profile by admin
router.put("/:id", adminprotect, updateProfile);

router.get("/get-status-by-id/:id", adminprotect, getStatus);

//banks
router.post("/addbank", adminprotect, addNewBank);
router.get("/listbanks", adminprotect, listBanks);

//uploads
router.put("/uploadadhaar/:id", adminprotect, uploadAdhaar);

//loans

//show all the loans
router.get("/view-loans", adminprotect, viewLoans);

//show all loans to be approved
router.get("/unapproved-loans", adminprotect, viewNonLoans);

//Get the loan details of a perticular user
router.get("/loan-details/:id", adminprotect, loanDetails);

//get loans of a user
router.get("/get-loans-by-id/:id", adminprotect, getLoansOfUsers);

//update the loan-status
router.put("/update-user-status/:id", adminprotect, updateUserStatus);

module.exports = router;
