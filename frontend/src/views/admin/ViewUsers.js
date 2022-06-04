//WE CAN USE COLLAPSABLE TABLES HERE. WITH ALL THE DATA ON THE TABLE(EG. EMAIL, BORROWER TYPE ETC.) AND IN COLLAPSABLE WE CAN ADD THE FUNCTIONS THE ADMIN CAN PERFORM ON THE USER(EG. UPDATE USER, VIEW LOAN STATUS ETC.)

import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getUsersList } from "../../slices/admin";
import { updateStatus } from "../../slices/admin";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ViewUsers = () => {
	const dispatch = useDispatch();
	const { auth, loading, users } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
			users: state.admin.users,
		}),
		shallowEqual
	);
	const handleChange = (event) => {
		//write the switch wala function here jo slices vich hou
		var new_stat;
		console.log(event.target.checked);
		if (event.target.checked == true) {
			new_stat = "inactive";
		} else {
			new_stat = "active";
		}
		dispatch(updateStatus(event.target.value, new_stat));
		dispatch(getUsersList());
	};
	const history = useHistory();
	const handleClick = (event) => {
		//redirect to edit wala page
		var id = event.target.value;
		history.push(`/admin/update-user/${id}`);
	};
	const handleClick2 = (event) => {
		var id = event.target.value;
		console.log(id);
		history.push(`/admin/view-loans/${id}`);
	};
	const handleClick3 = (event) => {
		var id = event.target.value;
		console.log(id);
		history.push(`/admin/get-status-by-id/${id}`);
	};
	useEffect(() => {
		dispatch(getUsersList());
	}, []);

	return (
		<div style={{}}>
			{users !== null &&
				users
					.slice(0)
					.reverse()
					.map((userr, index) => (
						<Paper
							elevation={2}
							style={{
								maxWidth: "80%",
								margin: "0 auto",
								padding: "1rem",
								marginTop: "2rem",
								// borderLeft: "3px solid #F50057",
								borderLeft: "3px solid #045de9",
							}}
						>
							{/* <Grid container key={index}>
						<Grid item xs={1.8} m={1.8}>
							<Typography variant="body2">Email</Typography>
							<hr style={{ width: "100%" }}></hr>
							<br></br>
							<Typography variant="body2">
								{user.email}
							</Typography>
						</Grid>
						<Grid item xs={1.7} m={1.7}>
							<Typography variant="body2">
								Phone Number
							</Typography>
							<hr style={{ width: "100%" }}></hr>
							<br></br>
							<Typography variant="body2">
								{user.phone}
							</Typography>
						</Grid>
						<Grid item xs={1.7} m={1.7}>
							<Typography variant="body2">
								Borrower Type
							</Typography>
							<hr style={{ width: "100%" }}></hr>
							<br></br>
							<Typography variant="body2">
								{user.borrower_type}
							</Typography>
						</Grid>
						<Grid item xs={1.7} m={1.7}>
							<Typography variant="body2">User Type</Typography>
							<hr style={{ width: "100%" }}></hr>
							<br></br>
							<Typography variant="body2">
								{user.user_type}
							</Typography>
						</Grid>
						<Grid item xs={1.7} m={1.7}>
							<Typography variant="body2">
								Reference ID
							</Typography>
							<hr style={{ width: "100%" }}></hr>
							<br></br>
							<Typography variant="body2">
								{user.ref_id}
							</Typography>
						</Grid>
						<Grid item xs={1.7} m={1.7}>
							<Typography variant="body2">Status</Typography>

							<br></br>
							<Typography variant="body2">
								<Switch
									value={user._id}
									checked={user.status == "active"}
									onChange={handleChange}
									inputProps={{ "aria-label": "controlled" }}
								/>
							</Typography>
						</Grid>
					</Grid> */}
							{/* <Grid container>
						<Grid item xs={6} md={3}>
							<Button
								onClick={handleClick}
								value={user._id}
								variant="contained"
								style={{ width: "80%" }}
							>
								
								Rewards
							</Button>
						</Grid>
						<Grid item xs={6} md={3}>
							<Button
								// onClick={handleClick}
								value={user._id}
								variant="contained"
								style={{ width: "80%" }}
							>
								Loan Status
							</Button>
						</Grid>
						<Grid item xs={6} md={3}>
							<Button
								// onClick={handleClick}
								value={user._id}
								variant="contained"
								style={{ width: "80%" }}
							>
								Ekyc Docs
							</Button>
						</Grid>
						<Grid item xs={6} md={3}>
							<Button
								onClick={handleClick}
								value={user._id}
								variant="contained"
								style={{ width: "80%" }}
							>
								Update profile
							</Button>
						</Grid>
					</Grid> */}
							<Grid container>
								<Grid item xs={2} m={2}>
									<ul style={{ listStyleType: "none" }}>
										<li key={index}>
											<h5>Email: {userr.email}</h5>
											<h5>Phone: {userr.phone}</h5>
											<h5>
												Borrower Type:{" "}
												{userr.borrower_type}
											</h5>
											<h5>
												User Type: {userr.user_type}
											</h5>
											<h5>
												Reference Id: {userr.ref_id}
											</h5>
											<h5>Status: {userr.status} </h5>
										</li>
									</ul>
								</Grid>
								<Grid
									item
									xs={1}
									m={1}
									style={{ textAlign: "center" }}
								>
									<Typography
										style={{ paddingTop: "0.3rem" }}
										variant="subtitle2"
									>
										Status
									</Typography>
									<br></br>
									<Switch
										value={userr._id}
										checked={userr.status == "active"}
										onChange={handleChange}
										inputProps={{
											"aria-label": "controlled",
										}}
									/>
								</Grid>
								<Grid item xs={1.8} m={1.8}>
									<br></br>
									<br></br>
									<Button
										onClick={handleClick}
										value={userr._id}
										variant="contained"
										style={{
											width: "90%",
											// backgroundColor: "#15db95",
										}}
									>
										Update profile
									</Button>
								</Grid>

								<Grid item xs={1.8} m={1.8}>
									{/* <Button color="secondary" aria-label="add an alarm">
								<AlarmIcon />
							</Button> */}
									<br></br>
									<br></br>
									<Button
										onClick={handleClick2}
										value={userr._id}
										variant="contained"
										style={{ width: "90%" }}
									>
										View All Loans
									</Button>
								</Grid>
								<Grid item xs={1.8} m={1.8}>
									{/* <Button
								color="primary"
								aria-label="add to shopping cart"
							>
								<AddShoppingCartIcon />
							</Button> */}
									<br></br>
									<br></br>
									<Button
										onClick={handleClick}
										value={userr._id}
										variant="contained"
										style={{ width: "90%" }}
									>
										Rewards
									</Button>{" "}
								</Grid>
								<Grid item xs={1.8} m={1.8}>
									{/* <Button
								color="primary"
								aria-label="add to shopping cart"
							>
								<AddShoppingCartIcon />
							</Button> */}
									<br></br>
									<br></br>
									<Button
										onClick={handleClick3}
										value={userr._id}
										variant="contained"
										style={{ width: "90%" }}
									>
										Loan Status
									</Button>
								</Grid>
							</Grid>
						</Paper>
					))}
		</div>
	);
};
export default ViewUsers;
