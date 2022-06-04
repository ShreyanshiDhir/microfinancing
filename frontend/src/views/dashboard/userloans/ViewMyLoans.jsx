import React, { useState, useEffect, Fragment } from "react";
import { setAlert } from "../../../slices/alert";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getMyLoans } from "../../../slices/users";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(odd)": {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

const ViewMyLoans = () => {
	const { auth, loading, userLoans } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
			userLoans: state.users.userLoans,
		}),
		shallowEqual
	);
	const dispatch = useDispatch();
	const history = useHistory();

	const handlePayback = (id) => {
		history.push(`/dashboard/view-loan/${id}`);
	};

	useEffect(() => {
		dispatch(getMyLoans());
	}, []);

	return (
		<Fragment>
			<TableContainer
				style={{ maxWidth: "80%", margin: "2rem auto" }}
				component={Paper}
			>
				<Table sx={{ minWidth: 700 }} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Loan Id</StyledTableCell>
							<StyledTableCell align="right">
								Loan Amount (₹)
							</StyledTableCell>
							<StyledTableCell align="right">
								Interest (%)
							</StyledTableCell>
							<StyledTableCell align="right">
								Date of Issue
							</StyledTableCell>
							<StyledTableCell align="right">
								Loan Duration
							</StyledTableCell>
							{/* <StyledTableCell align="right">
								Late Fees (₹)
							</StyledTableCell> */}
							{/* <StyledTableCell align="right">
								Processing Fees
							</StyledTableCell> */}
							<StyledTableCell align="right">
								Pending Amt (₹)
							</StyledTableCell>
							<StyledTableCell align="right">
								Status
							</StyledTableCell>
							<StyledTableCell align="right"> </StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{userLoans !== null &&
							userLoans
								.slice(0)
								.reverse()
								.map((loan, index) => (
									<StyledTableRow key={index}>
										<StyledTableCell
											component="th"
											scope="row"
										>
											{loan._id.slice(-5)}
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.loan_amount}
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.interest_percent}
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.date.slice(0, 10)}
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.loan_duration} month
										</StyledTableCell>

										{/* <StyledTableCell align="right">
											{loan.late_fees}
										</StyledTableCell> */}
										{/* <StyledTableCell align="right">
											{loan.processing_fees}
										</StyledTableCell> */}
										<StyledTableCell align="right">
											{loan.pending_amount}
										</StyledTableCell>

										<StyledTableCell align="right">
											{loan.loan_status == "paid" ? (
												<span
													style={{
														// border: "2px solid rgba(0,151,19,0.6)",
														padding:
															"0.2rem 1.3rem",
														borderRadius: "5px",
														background:
															"rgba(0,151,19,0.13)",
														color: "rgba(0,151,19,0.6)",
													}}
												>
													{loan.loan_status}
												</span>
											) : (
												<span
													style={{
														// border: "2px solid rgb(220,20,60,0.6)",
														padding:
															"0.2rem 0.5rem",
														borderRadius: "5px",
														background:
															"rgba(220,20,60,0.13)",
														color: "rgba(220,20,60,0.6)",
													}}
												>
													{loan.loan_status}
												</span>
											)}
										</StyledTableCell>
										<StyledTableCell align="right">
											<Link
												component="button"
												variant="body2"
												onClick={() =>
													handlePayback(loan._id)
												}
											>
												Pay Loan
											</Link>
										</StyledTableCell>
									</StyledTableRow>
								))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
};
export default ViewMyLoans;

{
	/* <ul key={index}>
								<br />
								<li>Loan amount: {loan.loan_amount}</li>
								<li>Loan duration: {loan.loan_duration}</li>
								<li>
									Interest Percent: {loan.interest_percent}
								</li>
								<li>Late fees: {loan.late_fees}</li>
								<li>Pending amount: {loan.pending_amount}</li>
								<li>Processing fees: {loan.processing_fees}</li>
								<li>Loan Status: {loan.loan_status}</li>
								<li>Deleted: {loan.deleted}</li>
								<li>Date: {loan.date}</li>
								<br></br>
								<Button
									variant="outlined"
									// className={classes.listBtn}
									onClick={() => handlePayback(loan._id)}
								>
									Payback loan
								</Button>
							</ul> */
}
