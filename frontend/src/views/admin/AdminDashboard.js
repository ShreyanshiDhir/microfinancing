import React, { Fragment } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getUsersList } from "../../slices/admin";
import { viewUnpaidLoans } from "../../slices/users";

import { Link, useHistory } from "react-router-dom";

import "./AdminDashboard.css";
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

const AdminDashboard = () => {
	const dispatch = useDispatch();
	const { users, userLoans } = useSelector(
		(state) => ({
			users: state.admin.users,
			userLoans: state.users.userLoans,
		}),
		shallowEqual
	);

	const history = useHistory();
	const handleClick_viewuser = () => {
		history.push("/admin/view-users");
	};
	const handleClick_unpaidloans = () => {
		history.push("/admin/view-unpaid-loans");
	};
	const handleClick_addbank = () => {
		history.push("/admin/add-bank");
	};
	const handleClick_viewbanks = () => {
		history.push("/admin/view-banks");
	};
	const handleClick_addnewuser = () => {
		history.push("/register");
	};
	const handleClick_viewloans = () => {
		history.push("#");
	};

	useEffect(() => {
		dispatch(getUsersList());
	}, []);
	useEffect(() => {
		dispatch(viewUnpaidLoans());
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
					<div className="body">ADMIN DASHBOARD</div>
				</div>
				<div>
					<Grid container spacing={0}>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_viewuser}
								className="custom-btn btn-8"
							>
								<span>View Users</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_unpaidloans}
								className="custom-btn btn-8"
							>
								<span>Unpaid Loans</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_addbank}
								className="custom-btn btn-8"
							>
								<span>Add New Bank</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_viewbanks}
								className="custom-btn btn-8"
							>
								<span>View Banks</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_addnewuser}
								className="custom-btn btn-8"
							>
								<span>New User</span>
							</button>
						</Grid>
						<Grid item xs={6} md={2} className="grid-item">
							<button
								type="button"
								onClick={handleClick_viewloans}
								className="custom-btn btn-8"
							>
								<span>View Loans</span>
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
						<Grid item xs={12} md={7}>
							<div style={{ paddingBottom: "1rem" }}>
								Recent users
								<hr
									style={{
										opacity: "0.1",
										backgroundColor: "black",
									}}
								></hr>
							</div>
							<TableContainer component={Paper}>
								<Table
									sx={{ minWidth: 700 }}
									aria-label="customized table"
								>
									<TableHead>
										<TableRow>
											<StyledTableCell>
												Email
											</StyledTableCell>
											<StyledTableCell>
												Phone
											</StyledTableCell>
											<StyledTableCell>
												Borrower Type
											</StyledTableCell>
											<StyledTableCell>
												Reference Id
											</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{users !== null &&
											users
												.slice(0)
												.reverse()
												.slice(0, 10)
												.map((userr, index) => (
													<StyledTableRow key={index}>
														<StyledTableCell
															component="th"
															scope="row"
														>
															{userr.email}
														</StyledTableCell>
														<StyledTableCell>
															{userr.phone}
														</StyledTableCell>
														<StyledTableCell>
															{
																userr.borrower_type
															}
														</StyledTableCell>
														<StyledTableCell>
															{userr.ref_id}
														</StyledTableCell>
													</StyledTableRow>
												))}
										;
									</TableBody>
								</Table>
							</TableContainer>
						</Grid>
						<Grid item xs={12} md={5}>
							<div style={{ paddingBottom: "1rem" }}>
								Latest Loans
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

export default AdminDashboard;
