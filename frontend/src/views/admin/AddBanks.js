import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../slices/alert";
import Image from "../img-3.png";
import { createBank } from "../../slices/admin";
import Loader from "../../components/layouts/Loading";

import {
	TextField,
	MenuItem,
	FormControl,
	Grid,
	InputLabel,
	Select,
	Input,
	Checkbox,
	ListItemText,
	Paper,
	Typography,
	Button,
} from "@material-ui/core";

const AddBanks = () => {
	const { loading } = useSelector((state) => {
		return {
			loading: state.loading.loading,
		};
	}, shallowEqual);
	const dispatch = useDispatch();
	const history = useHistory();
	const [data, setData] = useState({
		state: "",
		city: "",
		bank_name: "",
		bank_branch: "",
		iifc: "",
		bank_address: "",
	});
	const { state, city, bank_name, bank_branch, iifc, bank_address } = data;
	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			state === "" ||
			city === "" ||
			bank_name === "" ||
			bank_branch === "" ||
			iifc === "" ||
			bank_address === ""
		) {
			dispatch(setAlert("Please fill all the fields", "error"));
		} else {
			dispatch(createBank(data, history));
		}
	};

	return (
		<Grid container justify="center" alignItems="center">
			<Grid item container md={6} sm={12} style={{}}>
				{/* <form onSubmit={onSubmit}> */}
				{loading && <Loader />}
				<Paper
					elevation={3}
					style={{
						padding: "4rem",
						width: "80%",
						minWidth: "40%",
						// backgroundColor: "#CFEBFD",
						backgroundImage: `url(${Image})`,
						backgroundSize: "cover",
						margin: "3rem auto",
					}}
				>
					<Typography
						style={{
							fontSize: "3rem",
							lineHeight: "none",
							textAlign: "center",
							marginBottom: "2rem",
						}}
						color="primary"
					>
						ADD NEW BANK
					</Typography>
					<form onSubmit={onSubmit} className="form">
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								name="bank_name"
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										Name of Bank
									</span>
								}
								value={bank_name}
								onChange={onChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								name="bank_branch"
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										Name of branch
									</span>
								}
								value={bank_branch}
								onChange={onChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								name="iifc"
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										IIFC Code
									</span>
								}
								value={iifc}
								onChange={onChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								name="state"
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										State
									</span>
								}
								value={state}
								onChange={onChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								name="city"
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										City
									</span>
								}
								value={city}
								onChange={onChange}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								name="bank_address"
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										Bnak Address
									</span>
								}
								value={bank_address}
								onChange={onChange}
								variant="outlined"
							/>
						</Grid>

						<div>
							<Button
								type="submit"
								style={{ width: "100%", marginTop: "2rem" }}
								variant="contained"
								color="primary"
							>
								ADD BANK
							</Button>
						</div>
					</form>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default AddBanks;
