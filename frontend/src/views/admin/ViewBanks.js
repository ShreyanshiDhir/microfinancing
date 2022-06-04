import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getBanksList } from "../../slices/admin";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";
import { Paper, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import "./ViewBanks.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ViewBanks = () => {
	const dispatch = useDispatch();
	const { auth, loading, users } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
			users: state.admin.users,
		}),
		shallowEqual
	);
	// const handleChange = (event) => {
	// 	//write the switch wala function here jo slices vich hou
	// 	var new_stat;
	// 	console.log(event.target.checked);
	// 	if (event.target.checked == true) {
	// 		new_stat = "inactive";
	// 	} else {
	// 		new_stat = "active";
	// 	}
	// 	dispatch(updateStatus(event.target.value, new_stat));
	// 	dispatch(getBanksList());
	// };
	// const history = useHistory();
	// const handleClick = (event) => {
	// 	var id = event.target.value;
	// 	history.push(`/admin/update-user/${id}`);
	// };
	useEffect(() => {
		dispatch(getBanksList());
	}, []);

	return (
		<div className="maindiv10">
			{users.map((user, index) => (
				<Paper
					elevation={2}
					style={{
						maxWidth: "50%",
						margin: "0 auto",
						marginTop: "2rem",
						// borderLeft: "3px solid #F50057",
						padding: "4.5rem",
						borderLeft: "3px solid #045de9",
					}}
				>
					<Grid container justify="space-between">
						<Grid item xs={6} md={6}>
							<ul style={{ listStyleType: "none" }}>
								<li>
									<h4>Bank Name :</h4>
								</li>
								<br></br>
								<li>
									<h4>Bank Branch :</h4>
								</li>

								<br></br>
								<li>
									<h4>Bank Address :</h4>
								</li>
								<br></br>
								<li>
									<h4>IIFC Code :</h4>
								</li>
								<br></br>
								<li>
									<h4>State :</h4>
								</li>
								<br></br>
								<li>
									<h4>City :</h4>
								</li>
							</ul>
						</Grid>
						<Grid item xs={6} md={6}>
							<ul style={{ listStyleType: "none" }} key={index}>
								<li>
									<span style={{ float: "right" }}>
										<h4>{user.bank_name}</h4>
									</span>
								</li>
								<br></br>
								<br></br>
								<li>
									<span style={{ float: "right" }}>
										<h4>{user.bank_branch}</h4>
									</span>
								</li>
								<br></br>
								<br></br>
								<li>
									<span style={{ float: "right" }}>
										<h4>{user.bank_address}</h4>
									</span>
								</li>
								<br></br>
								<br></br>
								<li>
									<span style={{ float: "right" }}>
										<h4>{user.iifc}</h4>
									</span>
								</li>
								<br></br>
								<br></br>
								<li>
									<span style={{ float: "right" }}>
										<h4>{user.state}</h4>
									</span>
								</li>
								<br></br>
								<br></br>
								<li>
									<span style={{ float: "right" }}>
										<h4>{user.city} </h4>
									</span>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Paper>
			))}
		</div>
	);
};
export default ViewBanks;
