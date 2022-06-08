import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getUsersList } from "../../slices/admin";
import { getMyLoans } from "../../slices/users";
import { getMyLoanStatus } from "../../slices/users";
import { getMyProfile } from "../../slices/profile";
import { Typography } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";

import "./Dashboard.css";
import Grid from "@mui/material/Grid";
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
		backgroundColor: theme.palette.common.white,
		color: theme.palette.common.black,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 13,
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

const Dashboard = () => {
	const dispatch = useDispatch();
	const { users, userLoans, myProfile } = useSelector(
		(state) => ({
			users: state.admin.users,
			userLoans: state.users.userLoans,
			myProfile: state.profile.myProfile,
		}),
		shallowEqual
	);

	const history = useHistory();
	const handleClick_myloans = () => {
		history.push("/dashboard/view-my-loans");
	};
	const handleClick_askloan = () => {
		history.push("/dashboard/request-loan");
	};
	const handleClick_createprofile = () => {
		history.push("/dashboard/create-profile");
	};
	const handleClick_viewprofile = () => {
		history.push("/dashboard/update-profile");
	};
	const handleClick_loanstatus = () => {
		history.push("/dashboard/loan-details");
	};
	const handleClick_paybackloans = () => {
		history.push("#");
	};

	useEffect(() => {
		dispatch(getMyProfile());
	}, []);
	useEffect(() => {
		dispatch(getMyLoans());
	}, []);
	useEffect(() => {
		dispatch(getMyLoanStatus());
	}, []);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};
	return (
		<Fragment>
			<div className="maindiv">
				<div className="frag">
					<div className="body">USER DASHBOARD</div>
				</div>
				<div>
					<Grid container spacing={0}>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_myloans}
								className="custom-btn btn-8"
							>
								<span>View My Loans</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_askloan}
								className="custom-btn btn-8"
							>
								<span>Ask for Loan</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_createprofile}
								className="custom-btn btn-8"
							>
								<span>Create Profile</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_viewprofile}
								className="custom-btn btn-8"
							>
								<span>Edit Profile</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_loanstatus}
								className="custom-btn btn-8"
							>
								<span>Loan Status</span>
							</button>
						</Grid>

						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_paybackloans}
								className="custom-btn btn-8"
							>
								<span>Payback Loans</span>
							</button>
						</Grid>
					</Grid>
				</div>
				<div>
					<Grid
						container
						spacing={2}
						style={{
							maxWidth: "100%",
							margin: "2rem auto",
						}}
					>
						<Grid item xs={12} md={5}>
							<div style={{ paddingBottom: "1rem" }}>
								My Profile
								<hr
									style={{
										opacity: "0.1",
										backgroundColor: "black",
									}}
								></hr>
							</div>
							<Grid
								container
								style={{
									backgroundColor: "white",
									boxShadow:
										"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px ",
								}}
							>
								<Grid
									item
									xs={12}
									style={{
										marginLeft: "2rem",
										paddingBottom: "2rem",
									}}
								>
									<div>
										<Typography
											className="label"
											style={{
												marginTop: "2rem",
												fontSize: "0.9rem",
											}}
											color="textSecondary"
										>
											First Name:
											<span
												class="text"
												color="textSecondary"
												style={{
													fontSize: "1.1rem",

													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
												}}
											>
												{myProfile !== null &&
													myProfile.f_name}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.6",
												backgroundColor: "black",
												marginBottom: "1rem",
											}}
										></hr>
										<Typography
											className="label"
											color="textSecondary"
											style={{
												marginTop: "0.5rem",
												fontSize: "0.9rem",
											}}
										>
											Last Name:
											<span
												color="textSecondary"
												style={{
													fontSize: "1.1rem",
													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
												}}
											>
												{myProfile !== null &&
													myProfile.l_name}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.2",
												backgroundColor: "black",
												marginBottom: "1rem",
											}}
										></hr>
										<Typography
											className="label"
											color="textSecondary"
											style={{
												marginTop: "0.5rem",
												fontSize: "0.9rem",
											}}
										>
											Date of Birth:
											<span
												color="textSecondary"
												style={{
													fontSize: "1.1rem",
													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
												}}
											>
												{myProfile !== null &&
													myProfile.dob}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.6",
												backgroundColor: "black",
												marginBottom: "1rem",
											}}
										></hr>
										<Typography
											className="label"
											color="textSecondary"
											style={{
												marginTop: "0.5rem",
												fontSize: "0.9rem",
											}}
										>
											Location:
											<span
												color="textSecondary"
												style={{
													fontSize: "1.1rem",
													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
												}}
											>
												{myProfile !== null &&
													myProfile.location}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.2",
												backgroundColor: "black",
												marginBottom: "1rem",
											}}
										></hr>
										<Typography
											className="label"
											color="textSecondary"
											style={{
												marginTop: "0.5rem",
												fontSize: "0.9rem",
											}}
										>
											City:
											<span
												color="textSecondary"
												style={{
													fontSize: "1.1rem",
													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
													marginTop: "0.4rem",
												}}
											>
												{myProfile !== null &&
													myProfile.city}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.6",
												backgroundColor: "black",
												marginBottom: "1rem",
											}}
										></hr>
										<Typography
											className="label"
											color="textSecondary"
											style={{
												marginTop: "0.5rem",
												fontSize: "0.9rem",
											}}
										>
											State:
											<span
												color="textSecondary"
												style={{
													fontSize: "1.1rem",
													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
													marginTop: "0.4rem",
													marginBottom: "0.4rem",
												}}
											>
												{myProfile !== null &&
													myProfile.state}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.2",
												backgroundColor: "black",
												marginBottom: "1rem",
											}}
										></hr>
										<Typography
											className="label"
											color="textSecondary"
											style={{
												marginTop: "0.5rem",
												fontSize: "0.9rem",
											}}
										>
											PIN:
											<span
												color="textSecondary"
												style={{
													fontSize: "1.1rem",
													// color: "#2F4F4F",
													float: "right",
													marginRight: "11%",
													marginTop: "0.4rem",
													marginBottom: "0.4rem",
												}}
											>
												{myProfile !== null &&
													myProfile.pin}
											</span>
										</Typography>
										<hr
											style={{
												marginLeft: "0rem",
												width: "89%",
												opacity: "0.6",
												backgroundColor: "black",
											}}
										></hr>
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={7}>
							<div style={{ paddingBottom: "1rem" }}>
								My Loans
								<hr
									style={{
										opacity: "0.1",
										backgroundColor: "black",
									}}
								></hr>
							</div>

							<TableContainer component={Paper}>
								<Table
									sx={{ minWidth: 400 }}
									aria-label="customized table"
								>
									<TableHead>
										<TableRow>
											<StyledTableCell>
												Amount
											</StyledTableCell>
											<StyledTableCell>
												Duration
											</StyledTableCell>
											<StyledTableCell>
												Date
											</StyledTableCell>
											<StyledTableCell>
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
															{loan.loan_amount}
														</StyledTableCell>
														<StyledTableCell>
															{loan.loan_duration}{" "}
															months
														</StyledTableCell>
														<StyledTableCell>
															{loan.date.slice(
																0,
																10
															)}
														</StyledTableCell>
														<StyledTableCell>
															{loan.loan_status}
														</StyledTableCell>
													</StyledTableRow>
												))}
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
					</Grid>
				</div>
			</div>
		</Fragment>
	);
};

export default Dashboard;
