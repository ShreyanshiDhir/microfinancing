import API from "./api";

export const getUsers = async () => {
	try {
		const res = await API.get("/admin/listusers");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const changeStatus = async (id, curr_status) => {
	try {
		const res = await API.put("/admin/updatestatus", { id, curr_status });
		console.log(res.data);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const createBank = async (formData) => {
	try {
		const res = await API.post("admin/addbank", formData);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getBanks = async () => {
	try {
		const res = await API.get("/admin/listbanks");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getLoans = async () => {
	try {
		const res = await API.get("");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const editUserProfile = async (formData, id) => {
	try {
		const res = await API.put(`/admin/${id}`, formData);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getUnpaidLoans = async () => {
	try {
		const res = await API.get("/admin/unapproved-loans");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getLoansById = async (id) => {
	try {
		const res = await API.get(`/admin/get-loans-by-id/${id}`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		throw err;
	}
};

// getStatusById
export const getStatusById = async (id) => {
	try {
		const res = await API.get(`/admin/get-status-by-id/${id}`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		throw err;
	}
};
