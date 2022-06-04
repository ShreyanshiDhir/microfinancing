import React, { useState, useEffect, Fragment } from "react";
import { setAlert } from "../../../slices/alert";
import Loader from "../../../components/layouts/Loading";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { createLoan } from "../../../slices/users";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./RequestLoan.css";
import Typography from "@mui/material/Typography";

const RequestLoan = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const [data, setData] = useState({
		loan_amount: "",
	});
	const { loan_amount } = data;

	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (loan_amount === "") {
			dispatch(setAlert("Please fill all the fields", "error"));
		} else {
			dispatch(createLoan(data, history));
		}
	};

	return (
		<div className="maindiv10">
			<Fragment>
				<form onSubmit={onSubmit} className="form">
					<div
						style={{
							maxWidth: "27%",
							margin: "0 auto",
							borderRadius: "10px",
							backgroundColor: "white",
							paddingTop: "2rem",
							paddingBottom: "4.8rem",
							paddingRight: "3rem",
							paddingLeft: "3rem",
							fontSize: "1.1rem",
							boxShadow:
								"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
						}}
					>
						<Typography
							variant="h5"
							gutterBottom
							component="div"
							style={{
								paddingTop: "2rem",
								fontSize: "1.6rem",
								color: "#414a4c",
								paddingBottom: "1rem",
							}}
						>
							REQUEST LOAN
						</Typography>
						<TextField
							size="small"
							style={{ margin: "11px auto" }}
							fullWidth
							label={
								<span
									style={{
										fontFamily: "Poppins",
										fontWeight: "bold",
										fontSize: "1rem",
									}}
								>
									Loan amount
								</span>
							}
							name="loan_amount"
							value={loan_amount}
							onChange={onChange}
							placeholder="Loan amount"
							variant="outlined"
						/>
						<br></br>
						<TextField
							size="small"
							style={{ margin: "11px auto" }}
							fullWidth
							label={
								<span
									style={{
										fontFamily: "Poppins",
										fontWeight: "bold",
										fontSize: "1rem",
									}}
								>
									Coupon code
								</span>
							}
							// name="f_name"
							// value={f_name}
							// onChange={onChange}
							placeholder="Coupon code"
							variant="outlined"
						/>
						<br></br>
						<Button
							type="submit"
							style={{
								marginTop: "2rem",
								backgroundColor: "rgb(141,87,240)",
								width: "100%",
							}}
							variant="contained"
							color="primary"
							float="right"
						>
							ASK FOR LOAN
						</Button>{" "}
					</div>
				</form>
			</Fragment>
		</div>
	);
};

export default RequestLoan;

{
	/* <form onSubmit={onSubmit} className="form">
				<TextField
					size="small"
					style={{ margin: "11px auto" }}
					fullWidth
					label={
						<span
							style={{
								fontFamily: "Poppins",
								fontWeight: "bold",
								fontSize: "1rem",
							}}
						>
							Loan amount
						</span>
					}
					name="loan_amount"
					value={loan_amount}
					onChange={onChange}
					placeholder="Loan amount"
					variant="outlined"
				/>
				<br></br>
				<TextField
					size="small"
					style={{ margin: "11px auto" }}
					fullWidth
					label={
						<span
							style={{
								fontFamily: "Poppins",
								fontWeight: "bold",
								fontSize: "1rem",
							}}
						>
							Coupon code
						</span>
					}
					// name="f_name"
					// value={f_name}
					// onChange={onChange}
					placeholder="Coupon code"
					variant="outlined"
				/>
				<br></br>
				<Button
					type="submit"
					style={{ width: "100%", marginTop: "2rem" }}
					variant="contained"
					color="primary"
				>
					CREATE
				</Button>{" "}
			</form> */
}
