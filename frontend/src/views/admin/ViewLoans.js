// WE HAVE TO ADD LOGIC OF CHECKING KINNE UNPAID AA TE USDA TOTAL KAR DEWE

import * as React from "react";
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

function createData(
	loan_id,
	amount,
	interest,
	date_of_issue,

	repayment_date,
	status
) {
	return { loan_id, amount, interest, date_of_issue, repayment_date, status };
}

const rows = [
	createData("0186783171", "800", "4%", "16-04-2022", "31-05-2022", "Unpaid"),
	createData("5782019288", "500", "4%", "01-04-2022", "01-05-2022", "Paid"),
	createData("3171018678", "300", "4.5%", "11-02-2022", "13-03-2022", "Paid"),
	createData("4256811976", "200", "4.5%", "06-02-2022", "08-03-2022", "Paid"),
	createData("1835179804", "200", "4.5%", "09-01-2022", "08-02-2022", "Paid"),
];

const ViewLoans = () => {
	return (
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
							Repayment Date
						</StyledTableCell>
						<StyledTableCell align="right">Status</StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.loan_id}>
							<StyledTableCell component="th" scope="row">
								{row.loan_id}
							</StyledTableCell>
							<StyledTableCell align="right">
								Rs. {row.amount}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.interest}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.date_of_issue}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.repayment_date}
							</StyledTableCell>
							<StyledTableCell align="right">
								{row.status == "Paid" ? (
									<span
										style={{
											// border: "2px solid rgba(0,151,19,0.6)",
											padding: "0.2rem 1rem",
											borderRadius: "5px",
											background: "rgba(0,151,19,0.13)",
											color: "rgba(0,151,19,0.6)",
										}}
									>
										{row.status}
									</span>
								) : (
									<span
										style={{
											// border: "2px solid rgb(220,20,60,0.6)",
											padding: "0.2rem 0.5rem",
											borderRadius: "5px",
											background: "rgba(220,20,60,0.13)",
											color: "rgba(220,20,60,0.6)",
										}}
									>
										{row.status}
									</span>
								)}
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default ViewLoans;
