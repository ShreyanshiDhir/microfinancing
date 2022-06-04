import React, { useState, useEffect, Fragment } from "react";
import { setAlert } from "../../../slices/alert";
import Loader from "../../../components/layouts/Loading";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { payLoan } from "../../../slices/users";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";

const PayBackLoan = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const param = useParams();
	console.log(param.id);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(payLoan(param.id, history));
	};

	return (
		<Fragment>
			{/* ETHE WE WILL GIVE LIKE CHOOSE THE PAYMENT METHOD // */}
			{/* NEECHE IKK	BUTTON LAGA DUNGI TO PAYBACK LOAN JISTE DIRECT CLICK HOKE PAYBACK
			HOJE TE OTHE STATUS PAID HOJE AND ADMIN NU VI PATA LAGJE KE PAY KRTA
			AA */}
			<div>PayBackLoan</div>
			<form onSubmit={onSubmit} className="form">
				<Button
					type="submit"
					style={{ width: "100%", marginTop: "2rem" }}
					variant="contained"
					color="primary"
				>
					PAY DEBT
				</Button>{" "}
			</form>
		</Fragment>
	);
};

export default PayBackLoan;
