import { createSlice } from "@reduxjs/toolkit";
import { setAlert } from "./alert";
import { setLoading, clearLoading } from "./loading";
import * as REQUESTS from "../api/users";
import * as ADMINREQUESTS from "../api/admin";
import { VIEWMYLOANS } from "../constants/routes";

const initialState = {
	// user:null, //user of the loan
	loanStatus: null, //loan details of the user eg. max amount, min amy etc
	userLoan: null,
	userLoans: [], //all thr loans of the users
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		setAllLoans(state, { payload }) {
			state.userLoans = payload.data;
		},
		setLoan(state, { payload }) {
			state.userLoan = payload.data;
		},
		setLoanStatus(state, { payload }) {
			state.loanStatus = payload.data;
		},
	},
});
export const { setAllLoans, setLoan, setLoanStatus } = usersSlice.actions;
export default usersSlice.reducer;

//thunks
export const getMyLoans = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const myLoans = await REQUESTS.getMyLoans();
		dispatch(setAllLoans(myLoans));
		console.log(myLoans);
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getLoanById = (id) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const loan = await REQUESTS.getLoanById(id);
		dispatch(setLoan(loan));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		dispatch(setAlert("This Loan is invalid", "error"));
		console.log(err.response.data.error);
	}
};

export const createLoan = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const res = await REQUESTS.createLoan(formData);
		dispatch(clearLoading());
		dispatch(setAlert("Loan Requested", "success"));
		history.push(VIEWMYLOANS); //push it to the view loans page
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getMyLoanStatus = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const myLoanStatus = await REQUESTS.getMyLoanStatus();
		dispatch(setLoanStatus(myLoanStatus));
		// console.log(myLoans);
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const payLoan = (id, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const loan = await REQUESTS.payBackLoan(id);
		dispatch(setLoan(loan));
		dispatch(clearLoading());
		dispatch(setAlert("Debt paid", "success"));
		history.push(VIEWMYLOANS); //push it to the view loans page
	} catch (err) {
		dispatch(clearLoading());
		dispatch(setAlert("This Loan is not paid yet", "error"));
		console.log(err.response.data.error);
	}
};

//admin access to loans
export const viewUnpaidLoans = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const loans = await ADMINREQUESTS.getUnpaidLoans();
		dispatch(setAllLoans(loans));
		console.log(loans);
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getLoansById = (id) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const loans = await ADMINREQUESTS.getLoansById(id);
		dispatch(setAllLoans(loans));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		dispatch(setAlert("This Loan is invalid", "error"));
		console.log(err.response.data.error);
	}
};

export const getStatusById = (id) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const loanStatus = await ADMINREQUESTS.getStatusById(id);
		dispatch(setLoanStatus(loanStatus));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		dispatch(setAlert("This Loan is invalid", "error"));
		console.log(err.response.data.error);
	}
};
