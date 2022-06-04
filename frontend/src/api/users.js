import API from "./api";

export const getMyLoans = async () => {
	try {
		const res = await API.get("users/view-loans");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getLoanById = async (id) => {
	try {
		const res = await API.get(`users/view-loan/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const createLoan = async (formData) => {
	try {
		const res = await API.post("/users/request-loan", formData);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getMyLoanStatus = async () => {
	try {
		const res = await API.get("users/loan-details");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const payBackLoan = async (id) => {
	try {
		const res = await API.post(`users/payback/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
};
