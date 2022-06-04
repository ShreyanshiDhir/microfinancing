import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../../slices/alert";
import { editProfile, getMyProfile } from "../../../slices/profile";
import Image from "../../../assets/img/img-9.png";

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
	Typography,
	Paper,
	Button,
} from "@material-ui/core";

const EditProfile = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [data, setData] = useState({
		f_name: "loading",
		l_name: "loading",
		dob: "loading",
		location: "loading",
		city: "loading",
		state: "loading",
		pin: "loading",
	});
	const { loading, myProfile } = useSelector((state) => {
		return {
			loading: state.loading.loading,
			myProfile: state.profile.myProfile,
		};
	}, shallowEqual);
	useEffect(() => {
		dispatch(getMyProfile());
	}, []);
	useEffect(() => {
		if (myProfile !== null)
			setData({
				f_name: myProfile.f_name,
				l_name: myProfile.l_name,
				dob: myProfile.dob,
				location: myProfile.location,
				city: myProfile.city,
				state: myProfile.state,
				pin: myProfile.pin,
			});
	}, [myProfile]);

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
			dispatch(editProfile(data, history));
			// console.log(data);
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
		<>
			{loading && <Loader />}
			{myProfile !== null && (
				<Grid container justify="center" alignItems="center">
					<Grid
						item
						container
						md={6}
						sm={12}
						style={{ margin: "2rem auto" }}
					>
						{/* <form onSubmit={onSubmit}> */}

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
								color="primary"
							>
								UPDATE PROFILE
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
										style={{
											width: "100%",
											marginTop: "2rem",
										}}
										variant="contained"
										color="primary"
									>
										UPDATE
									</Button>
								</div>
							</form>
						</Paper>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default EditProfile;
