import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { LOGIN, DASHBOARD } from "../../constants/routes";
import Loading from "../layouts/Loading";

const AdminRoute = ({ children }) => {
	const {
		auth,
		loading: { loading },
	} = useSelector((state) => {
		return {
			auth: state.auth,
			loading: state.loading,
		};
	}, shallowEqual);

	return (
		<>
			{auth.user == null ? (
				<Loading />
			) : auth.user.user_type === "admin" ? (
				children
			) : (
				<Redirect to={DASHBOARD} />
			)}
		</>
	);
};

export default AdminRoute;
