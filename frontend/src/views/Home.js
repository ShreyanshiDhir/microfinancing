import { Grid, Typography } from "@material-ui/core";
import React from "react";
import "./hopepage.css";
import background from "../assets/img/Backgroundmicro.jpg";
import homeimage from "../assets/img/home-img.png";
import studentimage from "../assets/img/image2.png";
import image4 from "../assets/img/image4.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Home = () => {
	return (
		<body>
			<div>
				<div>
					<section style={{}} class="banner">
						<div>
							<Grid
								container
								style={{
									height: "42rem",
									backgroundImage: `url(${background})`,
									backgroundPosition: "center",
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
								}}
							>
								<Grid item xs={12} md={5} style={{}}>
									<Typography
										variant="h1"
										component="div"
										gutterBottom
										style={{
											textAlign: "center",
											paddingTop: "28%",
											color: "#045de9",
										}}
									>
										<b>
											WEBSITE<br></br>
										</b>
										<span style={{ marginLeft: "-8.5rem" }}>
											<b>NAME</b>
										</span>
										<Typography
											variant="subtitle1"
											component="div"
											gutterBottom
											style={{
												color: "black",
												textAlign: "center",
												paddingTop: "1.1rem",
											}}
										>
											The basic description of the website
											will be written here
										</Typography>
									</Typography>
								</Grid>
								<Grid
									item
									xs={0}
									md={7}
									style={{
										backgroundImage: `url(${homeimage})`,
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}
								></Grid>
							</Grid>
						</div>
					</section>
				</div>
				<div>
					<Typography
						variant="h4"
						component="div"
						gutterBottom
						style={{
							textAlign: "center",
							marginTop: "5rem",
							color: "#045de9",
						}}
					>
						<b>KEY FEATURES</b>
					</Typography>
					<Grid container style={{ alignItems: "center" }}>
						<Grid
							item
							sm={10}
							xs={10}
							md={3}
							style={{
								margin: "1rem auto",
							}}
						>
							<Card
								sx={{
									maxWidth: 375,
									boxShadow: "2",
								}}
							>
								<div style={{ textAlign: "center" }}>
									<AccountCircleTwoToneIcon
										style={{
											fontSize: "10rem",
											color: "#045de9",
										}}
									/>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Feature 1
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Lizards are a widespread group of
										squamate reptiles, with over 6,000
										species, ranging across all continents
										except Antarctica
									</Typography>
								</CardContent>
								<CardActions>
									{/* <Button size="small">Share</Button>
									<Button size="small">Learn More</Button> */}
								</CardActions>
							</Card>
						</Grid>
						<Grid
							item
							sm={10}
							xs={10}
							md={3}
							style={{
								margin: "1rem auto",
							}}
						>
							<Card
								sx={{
									maxWidth: 375,
									boxShadow: "2",
								}}
							>
								<div style={{ textAlign: "center" }}>
									<AccountCircleTwoToneIcon
										style={{
											fontSize: "10rem",
											color: "#045de9",
										}}
									/>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Feature 2
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Lizards are a widespread group of
										squamate reptiles, with over 6,000
										species, ranging across all continents
										except Antarctica
									</Typography>
								</CardContent>
								<CardActions>
									{/* <Button size="small">Share</Button>
									<Button size="small">Learn More</Button> */}
								</CardActions>
							</Card>
						</Grid>
						<Grid
							item
							xs={10}
							sm={10}
							md={3}
							style={{
								margin: "1rem auto",
							}}
						>
							<Card
								sx={{
									maxWidth: 375,
									boxShadow: "2",
								}}
							>
								<div style={{ textAlign: "center" }}>
									<AccountCircleTwoToneIcon
										style={{
											fontSize: "10rem",
											color: "#045de9",
										}}
									/>
								</div>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										Feature 3
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Lizards are a widespread group of
										squamate reptiles, with over 6,000
										species, ranging across all continents
										except Antarctica
									</Typography>
								</CardContent>
								<CardActions>
									{/* <Button size="small">Share</Button>
									<Button size="small">Learn More</Button> */}
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</div>
				<div>
					<section style={{}} class="banner">
						<div>
							<Grid
								container
								style={{
									height: "45rem",
									marginTop: "2rem",
									// backgroundImage: `url(${studentimage})`,
									// backgroundPosition: "center",
									// backgroundSize: "cover",
									// backgroundRepeat: "no-repeat",
								}}
							>
								<Grid
									item
									xs={0}
									md={6}
									style={{
										backgroundImage: `url(${studentimage})`,
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}
								></Grid>
								<Grid item xs={12} md={6} style={{}}>
									<div
										style={{
											marginLeft: "6rem",
											paddingTop: "4rem",
										}}
									>
										<Typography
											variant="h4"
											component="div"
											gutterBottom
											style={{
												color: "#045de9",
											}}
										>
											<b>
												HEADING 1<br></br>
											</b>

											<ul>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "3rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
											</ul>
										</Typography>
									</div>
								</Grid>
							</Grid>
						</div>
					</section>
				</div>
				<div>
					<section style={{}} class="banner">
						<div>
							<Grid
								container
								style={{
									height: "45rem",
									marginTop: "2rem",
									// backgroundImage: `url(${studentimage})`,
									// backgroundPosition: "center",
									// backgroundSize: "cover",
									// backgroundRepeat: "no-repeat",
								}}
							>
								<Grid item xs={12} md={6} style={{}}>
									<div
										style={{
											marginLeft: "6rem",
											paddingTop: "4rem",
										}}
									>
										<Typography
											variant="h4"
											component="div"
											gutterBottom
											style={{
												color: "#045de9",
											}}
										>
											<b>
												HEADING 2<br></br>
											</b>

											<ul>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "3rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
												<li>
													{" "}
													<Typography
														variant="subtitle1"
														component="div"
														gutterBottom
														style={{
															color: "black",
															marginTop: "1rem",
														}}
													>
														The description related
														to the heading will be
														written here in these
														bullet points. The
														description related to
														the heading will be
														written here in these
														bullet points.
													</Typography>
												</li>
											</ul>
										</Typography>
									</div>
								</Grid>
								<Grid
									item
									xs={0}
									md={6}
									style={{
										backgroundImage: `url(${image4})`,
										backgroundPosition: "center",
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
									}}
								></Grid>
							</Grid>
						</div>
					</section>
				</div>
			</div>
		</body>
	);
};

export default Home;
