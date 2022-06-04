// /view-loan/:id

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../../slices/alert";
import { getLoanById } from "../../../slices/users";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import "./ViewLoan.css";

const ViewLoan = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { userLoan } = useSelector(
		(state) => ({
			userLoan: state.users.userLoan,
		}),
		shallowEqual
	);

	const param = useParams();
	const handlePaybackLoan = (id) => {
		history.push(`/dashboard/payback-loan/${id}`);
	};

	if (userLoan !== null) {
		var int_amt =
			parseInt(userLoan.pending_amount) - parseInt(userLoan.loan_amount);
	}

	useEffect(() => {
		dispatch(getLoanById(param.id)); //we have to pass the id of the loan
	}, []);

	return (
		<div className="maindiv10">
			{userLoan !== null && (
				<Fragment>
					<div
						style={{
							maxWidth: "27%",
							margin: "0 auto",
							borderRadius: "10px",
							backgroundColor: "white",
							paddingTop: "4.5rem",
							paddingBottom: "0.5rem",
							fontSize: "1.1rem",
							boxShadow:
								"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
						}}
					>
						<span
							style={{
								marginLeft: "2rem",
								paddingTop: "3rem",
								fontSize: "1.6rem",
								color: "#414a4c",
							}}
						>
							PAY LOAN
						</span>
						<span
							style={{
								float: "right",
								marginRight: "2rem",
								color: "gray",
								opacity: "0.6",
							}}
						>
							#27956
						</span>

						<hr
							style={{
								marginTop: "2rem",
								width: "86%",
								marginLeft: "2rem",
								outline: "none",
								backgroundColor: "gray",
								border: "none",
								height: "1.5px",
								opacity: "0.2",
							}}
						></hr>
						<Grid
							container
							style={{ padding: "2rem", color: "dark-gray" }}
						>
							<Grid item xs={12} md={6}>
								<span>Amount Taken</span>
								<br></br>
								<br></br>
								<span>Interest Amount</span>
								<br></br>
								<br></br>
								<span>Processing Fee</span>
								<br></br>
								<br></br>
								<span>Late Fee</span>
								<br></br>
								<hr
									style={{
										marginTop: "2rem",
										marginBottom: "1rem",
										// marginLeft: "2rem",
										outline: "none",
										backgroundColor: "gray",
										border: "none",
										height: "1.5px",
										opacity: "0.2",
									}}
								></hr>
								<span>Final Amount</span>
								<br></br>
								<br></br>
							</Grid>
							<Grid
								item
								align="right"
								xs={12}
								md={6}
								style={{ float: "left" }}
							>
								<span>{userLoan.loan_amount}</span>
								<br></br>
								<br></br>
								<span>{int_amt}</span>
								<br></br>
								<br></br>
								<span>{userLoan.processing_fees}</span>
								<br></br>
								<br></br>
								<span>{userLoan.late_fees}</span>
								<br></br>
								<hr
									style={{
										marginTop: "2rem",
										marginBottom: "1rem",
										width: "100%",
										marginRight: "2rem",
										outline: "none",
										backgroundColor: "gray",
										border: "none",
										height: "1.5px",
										opacity: "0.2",
									}}
								></hr>
								<span>₹ {userLoan.pending_amount}</span>
								<br></br>
								<br></br>
							</Grid>
							<span
								className="paynow"
								onClick={() => handlePaybackLoan(userLoan._id)}
								style={{
									float: "right",
									marginLeft: "16.12rem",
									marginTop: "1.6rem",
									color: "rgb(141,87,240)",
									fontWeight: "bold",
									fontSize: "1.2rem",
								}}
							>
								PAY NOW
							</span>
						</Grid>
					</div>
				</Fragment>
			)}
		</div>
	);
};
export default ViewLoan;

{
	/* <ul>
						<li>Loan amount: {userLoan.loan_amount}</li>
						<li>Loan duration: {userLoan.loan_duration}</li>
						<li>Interest Percent: {userLoan.interest_percent}</li>
						<li>Late fee: {userLoan.late_fees}</li>
						<li>Pending Amount: {userLoan.pending_amount}</li>
						<li>Processing fee: {userLoan.processing_fees}</li>
						<li>Loan Status: {userLoan.loan_status}</li>
					</ul>

					<Button
						variant="outlined"
						onClick={() => handlePaybackLoan(userLoan._id)}
					>
						Payback loan
					</Button> */
}
