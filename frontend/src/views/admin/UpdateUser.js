import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../slices/alert";
import { getUserProfile } from "../../slices/profile";
import { editUserProfile } from "../../slices/admin";
import Image from "../../assets/img/img-9.png";
import { useParams } from "react-router-dom";
import Loader from "../../components/layouts/Loading";
import { withRouter } from "react-router-dom";
// import { BrowserRouter as Router } from "react-router-dom";

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

const UpdateUser = (props) => {
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

	const { loading, profileUser } = useSelector((state) => {
		return {
			loading: state.loading.loading,
			profileUser: state.profile.profileUser,
		};
	}, shallowEqual);
	// const { abc } = useParams();
	const param = useParams();
	// const { id } = props.match.params;
	// const id = props.match.params.id;
	useEffect(() => {
		console.log(param);
		dispatch(getUserProfile(param.id)); //we have to pass the id of the user
	}, []);

	useEffect(() => {
		if (profileUser !== null)
			setData({
				f_name: profileUser.f_name,
				l_name: profileUser.l_name,
				dob: profileUser.dob,
				location: profileUser.location,
				city: profileUser.city,
				state: profileUser.state,
				pin: profileUser.pin,
			});
	}, [profileUser]);

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
			dispatch(editUserProfile(data, param.id, history));
			dispatch(setAlert("Profile Updated", "success"));
		}
	};

	return (
		<>
			{loading && <Loader />}
			{profileUser !== null && (
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
							elevation={4}
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
									marginTop: "-1rem",
								}}
								color="primary"
							>
								UPDATE PROFILE
							</Typography>

							<form onSubmit={onSubmit} className="form">
								{/* <Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "11px auto",
										}}
									> */}
								{/* <InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
										>
											Gender
										</InputLabel> */}
								{/* <Select
											fullWidth
											name="gender"
											open={open}
											onClose={handleClose}
											onOpen={handleOpen}
											value={gender}
											onChange={onChange}
										>
											<MenuItem value="male">
												Male
											</MenuItem>
											<MenuItem value="female">
												Female
											</MenuItem>
											<MenuItem value="others">
												Others
											</MenuItem>
										</Select> */}
								{/* </FormControl>
								</Grid> */}
								{/* <Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "11px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
										>
											Blood Group
										</InputLabel>
										<Select
											name="bloodGroup"
											open={open2}
											onClose={handleClose2}
											onOpen={handleOpen2}
											value={bloodGroup}
											onChange={onChange}
										>
											{bloodGroupsArray.map((item, i) => (
												<MenuItem key={i} value={item}>
													{item}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid> */}
								<Grid item xs={12}>
									<TextField
										type="text"
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
										type="text"
										size="small"
										style={{ margin: "11px auto" }}
										fullWidth
										name="l_name"
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
										value={l_name}
										onChange={onChange}
										placeholder="Last Name"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="text"
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
												Date of Birth
											</span>
										}
										name="dob"
										value={dob}
										onChange={onChange}
										placeholder="Date of birth"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="text"
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
										placeholder="House Number and landmark"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="text"
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
										placeholder="City of residence"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="text"
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
										placeholder="State of residence"
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

								{/* <Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "18px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
											id="demo-mutiple-name-label"
										>
											Medical History
										</InputLabel>
										<Select
											multiple
											variant="outlined"
											name="medicalHistory"
											value={medicalHistory}
											renderValue={(selected) =>
												selected.join(", ")
											}
											onChange={onChange}
											input={<Input />}
											MenuProps={MenuProps}
										>
											{historyArray.map((history) => (
												<MenuItem
													key={history}
													value={history}
												>
													<Checkbox
														checked={
															medicalHistory.indexOf(
																history
															) > -1
														}
													/>
													<ListItemText
														primary={history}
													/>
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid> */}
								{/* <Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "18px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
											id="demo-mutiple-name-label"
										>
											Deficiency
										</InputLabel>
										<Select
											multiple
											variant="outlined"
											name="deficiency"
											value={deficiency}
											renderValue={(selected) =>
												selected.join(", ")
											}
											onChange={onChange}
											input={<Input />}
											MenuProps={MenuProps}
										>
											{deficiencyArray.map((allergy) => (
												<MenuItem
													key={allergy}
													value={allergy}
												>
													<Checkbox
														checked={
															deficiency.indexOf(
																allergy
															) > -1
														}
													/>
													<ListItemText
														primary={allergy}
													/>
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid> */}

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

export default withRouter(UpdateUser);
