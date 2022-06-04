import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { getLoansById } from "../../slices/users";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

const ViewUserLoans = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { userLoans } = useSelector(
		(state) => ({
			userLoans: state.users.userLoans,
		}),
		shallowEqual
	);
	const param = useParams();

	useEffect(() => {
		dispatch(getLoansById(param.id));
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
								Loan Amount
							</StyledTableCell>
							<StyledTableCell align="right">
								Interest
							</StyledTableCell>
							<StyledTableCell align="right">
								Date of Issue
							</StyledTableCell>
							<StyledTableCell align="right">
								Loan Duration
							</StyledTableCell>
							<StyledTableCell align="right">
								Late Fees
							</StyledTableCell>
							<StyledTableCell align="right">
								Pending Amount
							</StyledTableCell>
							{/* <StyledTableCell align="right">
								Processing Fees
							</StyledTableCell> */}
							<StyledTableCell align="right">
								Status
							</StyledTableCell>
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
											{loan.loan_amount} ₹
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.interest_percent} %
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.date.slice(0, 10)}
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.loan_duration} month
										</StyledTableCell>

										<StyledTableCell align="right">
											{loan.late_fees}
										</StyledTableCell>
										<StyledTableCell align="right">
											{loan.pending_amount} ₹
										</StyledTableCell>
										{/* <StyledTableCell align="right">
											{loan.processing_fees}
										</StyledTableCell> */}
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
									</StyledTableRow>
								))}
					</TableBody>
				</Table>
			</TableContainer>
		</Fragment>
	);
};
export default ViewUserLoans;
