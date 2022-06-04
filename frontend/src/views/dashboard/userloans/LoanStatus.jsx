//ETHE ASSI LOAN STATUS DASSANGE KE MAXIMUM AMOUNT AND ALL KI AA
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { getMyLoanStatus } from "../../../slices/users";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import "./LoanStatus.css";

const LoanStatus = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { loanStatus } = useSelector(
		(state) => ({
			loanStatus: state.users.loanStatus,
		}),
		shallowEqual
	);

	useEffect(() => {
		dispatch(getMyLoanStatus());
	}, []);

	return (
		<div className="maindiv10">
			{loanStatus !== null && (
				<Fragment>
					<Grid
						item
						style={{
							margin: "0 auto",
							maxWidth: "38%",
							padding: "1rem",
							boxShadow:
								"rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
							paddingBottom: "4rem",
							paddingTop: "2.5rem",
							marginTop: "1rem",
							backgroundColor: "white",
							borderRadius: "10px",
						}}
						xs={12}
						md={9}
					>
						<div>
							<Typography
								style={{
									color: "rgb(41,92,252)",
									marginLeft: "2rem",
									marginTop: "1rem",
									fontSize: "1.7rem",
									marginBottom: "1rem",
								}}
								variant="h5"
							>
								LOAN DETAILS
							</Typography>
							<hr
								style={{
									marginLeft: "2rem",
									width: "80%",
								}}
							></hr>
						</div>
						<Grid container>
							<Grid item xs={12}>
								<div style={{ marginLeft: "2rem" }}>
									<Typography
										className="label"
										style={{
											marginTop: "2rem",
											fontSize: "1.1rem",
										}}
										color="textSecondary"
									>
										Maximum Amount:
										<span
											class="text"
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{loanStatus.minimum_amount}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<Typography
										className="label"
										color="textSecondary"
										style={{
											marginTop: "0.5rem",
											fontSize: "1.1rem",
										}}
									>
										Minimum Amount:
										<span
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{loanStatus.maximum_amount}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<Typography
										className="label"
										color="textSecondary"
										style={{
											marginTop: "0.5rem",
											fontSize: "1.1rem",
										}}
									>
										Maximum Duration (months):
										<span
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{loanStatus.minimum_duration}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<Typography
										className="label"
										color="textSecondary"
										style={{
											marginTop: "0.5rem",
											fontSize: "1.1rem",
										}}
									>
										Minimum Duration (months):
										<span
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{loanStatus.maximum_duration}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Fragment>
			)}
		</div>
	);
};
export default LoanStatus;
// <ul>
// 	<li>Minimum amount: {loanStatus.minimum_amount}</li>
// 	<li>Maximum amount: {loanStatus.maximum_amount}</li>
// 	<li>Minimum duration: {loanStatus.minimum_duration}</li>
// 	<li>Minimum amount: {loanStatus.minimum_amount}</li>
// 	<li>Maximum duration: {loanStatus.maximum_duration}</li>
// 	<li>duration type{loanStatus.duration_type}</li>
// </ul>
