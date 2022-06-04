import React, { useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../../slices/alert";
import Image from "../img-9.png";
import { createProfile } from "../../../slices/profile";
import Loader from "../../../components/layouts/Loading";

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

const CreateProfile = () => {
	const { loading } = useSelector((state) => {
		return {
			loading: state.loading.loading,
		};
	}, shallowEqual);
	const dispatch = useDispatch();
	const history = useHistory();
	const [data, setData] = useState({
		f_name: "",
		l_name: "",
		dob: "",
		location: "",
		city: "",
		state: "",
		pin: "",
	});
	const { f_name, l_name, dob, location, city, state, pin } = data;
	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			f_name === "" ||
			l_name === "" ||
			dob === "" ||
			location === "" ||
			city === "" ||
			state === "" ||
			pin === ""
		) {
			dispatch(setAlert("Please fill all the fields", "error"));
		} else {
			dispatch(createProfile(data, history));
		}
	};

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	return (
		<Grid container justify="center" alignItems="center">
			<Grid item container md={6} sm={12} style={{ margin: "2rem auto" }}>
				{/* <form onSubmit={onSubmit}> */}
				{loading && <Loader />}
				<Paper
					elevation={3}
					style={{
						padding: "4rem",
						paddingTop: "3rem",
						width: "80%",
						minWidth: "40%",
						backgroundColor: "white",
						// backgroundImage: `url(${Image})`,
						backgroundSize: "cover",
						margin: "0 auto",
						borderRadius: "8px",
					}}
				>
					<Typography
						style={{
							fontSize: "2.5rem",
							lineHeight: "none",
							textAlign: "center",
							marginBottom: "2rem",
						}}
						variant="h5"
						color="primary"
					>
						CREATE PROFILE
					</Typography>
					<form onSubmit={onSubmit} className="form">
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										First Name
									</span>
								}
								name="f_name"
								value={f_name}
								onChange={onChange}
								placeholder="First Name"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										Last Name
									</span>
								}
								name="l_name"
								value={l_name}
								onChange={onChange}
								placeholder="Last Name"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="date"
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
											marginLeft: "6rem",
										}}
									>
										DOB
									</span>
								}
								name="dob"
								value={dob}
								onChange={onChange}
								// placeholder="Date of Birth"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										Location
									</span>
								}
								name="location"
								value={location}
								onChange={onChange}
								placeholder="Location / Landmark"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
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
								name="city"
								value={city}
								onChange={onChange}
								placeholder="City"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
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
								name="state"
								value={state}
								onChange={onChange}
								placeholder="State"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								type="number"
								size="small"
								style={{ margin: "11px auto" }}
								fullWidth
								label={
									<span
										style={{
											fontFamily: "Poppins",
											fontWeight: "bold",
											fontSize: "1rem",
										}}
									>
										PIN
									</span>
								}
								name="pin"
								value={pin}
								onChange={onChange}
								placeholder="PIN Code"
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
								CREATE
							</Button>
						</div>
					</form>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default CreateProfile;
