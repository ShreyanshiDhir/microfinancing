import React, { useState, useEffect, Fragment } from "react";
import { setAlert } from "../../../slices/alert";
import Loader from "../../../components/layouts/Loading";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { payLoan } from "../../../slices/users";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";

const PayBackLoan = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const param = useParams();
	console.log(param.id);

	const { userLoan } = useSelector(
		(state) => ({
			userLoan: state.users.userLoan,
		}),
		shallowEqual
	);

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(payLoan(param.id, history));
	};

	return (
		<div
			style={{
				background: "#FEF8F8",
				minHeight: "100vh",
				minWidth: "100%",
				paddingTop: "2rem",
			}}
		>
			{userLoan !== null && (
				<Fragment>
					<div
						style={{
							maxWidth: "35%",
							margin: "0 auto",
							borderRadius: "7px",
							backgroundColor: "white",
							paddingBottom: "0.5rem",
							fontSize: "1.1rem",
							boxShadow:
								"rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
						}}
					>
						<div
							style={{
								borderBottom: "1px solid rgba(93,111,136,0.2)",
								textAlign: "center",
								padding: "1rem",
								color: "rgb(93,111,136)",
								backgroundColor: "rgb(238,242,244)",
							}}
						>
							<Typography variant="h5">Pay Invoice</Typography>
						</div>
						<div
							style={{
								textAlign: "center",
								padding: "1rem",
								paddingBottom: "0.5rem",
							}}
						>
							<img
								src="https://www.city-pension.com/wp-content/uploads/2021/08/epay_paypal_kreditkarte.png"
								style={{ width: "35%" }}
							></img>
						</div>
						<div style={{ padding: "2rem", paddingTop: "0rem" }}>
							<Typography
								variant="subtitle2"
								gutterBottom
								style={{ color: "#46545C" }}
							>
								<b>Payment Amount</b>
							</Typography>
							<Typography
								style={{
									fontSize: "20px",
									marginBottom: "1rem",
								}}
							>
								₹ {userLoan.pending_amount}
							</Typography>
							<Typography
								variant="subtitle2"
								style={{ color: "#46545C" }}
							>
								<b>Name on card</b>
							</Typography>
							<TextField
								variant="outlined"
								size="small"
								style={{ width: "100%", marginBottom: "1rem" }}
							></TextField>
							<Typography
								variant="subtitle2"
								style={{ color: "#46545C" }}
							>
								<b>Card Number</b>
							</Typography>
							<TextField
								variant="outlined"
								size="small"
								style={{ width: "100%", marginBottom: "1rem" }}
							></TextField>
							<Grid container>
								<Grid item sm={6} md={6}>
									<Typography
										variant="subtitle2"
										style={{ color: "#46545C" }}
									>
										<b>Expiry</b>
									</Typography>
									<TextField
										variant="outlined"
										label="MM / YY"
										size="small"
										style={{
											width: "100%",
											marginBottom: "1rem",
										}}
									></TextField>
								</Grid>
								<Grid item sm={6} md={6}>
									<Typography
										variant="subtitle2"
										style={{ color: "#46545C" }}
									>
										<b>CVV</b>
									</Typography>
									<TextField
										variant="outlined"
										size="small"
										style={{
											width: "100%",
											marginBottom: "1rem",
										}}
									></TextField>
								</Grid>
							</Grid>
							<Typography
								variant="subtitle2"
								style={{ color: "#46545C" }}
							>
								<b>ZIP/Postal code</b>
							</Typography>
							<TextField
								variant="outlined"
								size="small"
								style={{ width: "100%", marginBottom: "1rem" }}
							></TextField>
							<form onSubmit={onSubmit} className="form">
								<Button
									type="submit"
									style={{
										width: "100%",
										marginTop: "1rem",
										marginBottom: "1rem",
									}}
									variant="contained"
									color="primary"
								>
									PAY ₹ {userLoan.pending_amount}
								</Button>{" "}
							</form>
						</div>
					</div>
				</Fragment>
			)}
			;
		</div>
	);
};

export default PayBackLoan;
