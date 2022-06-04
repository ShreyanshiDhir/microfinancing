const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");

const {
	getLoan,
	viewLoan,
	loanDetails,
	getLoanById,
	payLoan,
} = require("../controllers/users");

router.use(protect);

//LOANS

//ask for loan
router.post("/request-loan", getLoan);

//status of loans
router.get("/view-loans", viewLoan);

//to get loan details
router.get("/loan-details", loanDetails);

//get loan by id
router.get("/view-loan/:id", getLoanById);

//payback loan
router.post("/payback/:id", payLoan);

//add bank details

//add card details

module.exports = router;
