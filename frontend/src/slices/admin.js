import { createSlice } from "@reduxjs/toolkit";
import * as REQUESTS from "../api/admin";

import { VIEWUSERS } from "../constants/routes";
import { setAlert } from "./alert";
import { setLoading, clearLoading } from "./loading";

const initialState = {
	user: null,
	users: [],
};

const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		setUsers(state, { payload }) {
			state.users = payload.data;
		},
		setStatus(state, { payload }) {
			// state.user = payload.data;
		},
	},
});

export const { setUsers, setStatus } = adminSlice.actions;
export default adminSlice.reducer;

//thunks

export const getUsersList = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const users = await REQUESTS.getUsers();
		dispatch(setUsers(users));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const updateStatus = (id, curr_status) => async (dispatch) => {
	try {
		const res = await REQUESTS.changeStatus(id, curr_status);
	} catch (err) {
		console.log(err.response.data.error);
	}
};

export const createBank = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.createBank(formData);
		dispatch(clearLoading());
		// history.push(MYPROFILE); we have to push to view all banks
		dispatch(setAlert("New Bank added", "success"));
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getBanksList = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const banks = await REQUESTS.getBanks();
		dispatch(setUsers(banks));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const editUserProfile = (formData, id, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.editUserProfile(formData, id);
		console.log(formData);
		dispatch(clearLoading());
		// history(MYPROFILE);
		dispatch(setAlert("Profile Updated", "success"));
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

//This we will do when the admin need to check the loans of the users

// export const getUserPrescriptions = (id) => async (dispatch) => {
// 	try {
// 		dispatch(setLoading());
// 		const userPrescriptions = await REQUESTS.getUserPrescriptions(id);
// 		dispatch(setPrescriptions(userPrescriptions));
// 		dispatch(clearLoading());
// 	} catch (err) {
// 		dispatch(clearLoading());
// 		dispatch(setAlert("Your Prescriptions could not be loaded","error"));
// 		console.log(err.response.data.error);
// 	}
// };
