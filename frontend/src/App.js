import React, { lazy, Suspense, useEffect } from "react";
//routing
import * as ROUTES from "./constants/routes";
import { Switch, Link, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
import AdminRoute from "./components/routing/AdminRoute";

//layouts
import Loading from "./components/layouts/Loading";
import Alert from "./components/layouts/Alert";
import Navbar from "./components/layouts/Navbar/Navbar.js";

//auto login on refresh
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./slices/auth";
//css
import "./App.css";
import { clearLoading, setLoading } from "./slices/loading";
//components
const UserRoute = lazy(() => import("./components/routing/UserRoute"));
const Home = lazy(() => import("./views/Home"));
//User
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const DisplayProfile = lazy(() =>
	import("./views/dashboard/profile/DisplayProfile.jsx")
);
const CreateProfile = lazy(() =>
	import("./views/dashboard/profile/CreateProfile")
);
const EditProfile = lazy(() => import("./views/dashboard/profile/EditProfile"));

//Loans
const RequestLoan = lazy(() =>
	import("./views/dashboard/userloans/RequestLoan")
);
const ViewMyLoans = lazy(() =>
	import("./views/dashboard/userloans/ViewMyLoans")
);
const LoanStatus = lazy(() => import("./views/dashboard/userloans/LoanStatus"));
const ViewLoan = lazy(() => import("./views/dashboard/userloans/ViewLoan"));
const PayBackLoan = lazy(() =>
	import("./views/dashboard/userloans/PayBackLoan")
);
const BankDetails = lazy(() =>
	import("./views/dashboard/userloans/BankDetails")
);
const CardDetails = lazy(() =>
	import("./views/dashboard/userloans/CardDetails")
);

const AdminDashboard = lazy(() => import("./views/admin/AdminDashboard"));
const ViewUsers = lazy(() => import("./views/admin/ViewUsers"));
const UpdateUser = lazy(() => import("./views/admin/UpdateUser"));
const ViewLoans = lazy(() => import("./views/admin/ViewLoans"));
const AddBanks = lazy(() => import("./views/admin/AddBanks"));
const ViewBanks = lazy(() => import("./views/admin/ViewBanks"));
const ViewUserLoans = lazy(() => import("./views/admin/ViewUserLoans"));
const UpdateUserStatus = lazy(() => import("./views/admin/UpdateUserStatus"));
const UnpaidLoans = lazy(() => import("./views/admin/UnpaidLoans"));
const ViewStatus = lazy(() => import("./views/admin/ViewStatus"));

const App = () => {
	useEffect(() => {
		const loadMe = async () => {
			if (localStorage.token) {
				await setAuthToken(localStorage.token);
				store.dispatch(loadUser());
			} else {
				store.dispatch(clearLoading());
			}
		}; // this thing does loading : false if not logged in
		loadMe();
	}, []);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Alert />
					<Navbar />
					{/* <Alert /> */}

					<Switch>
						<Route exact path={ROUTES.HOME}>
							<Home />
						</Route>

						<Route exact path={ROUTES.LOGIN}>
							<Login />
						</Route>
						<Route exact path={ROUTES.REGISTER}>
							<Register />
						</Route>

						{/* private routes */}

						{/* User */}

						<PrivateRoute exact path={ROUTES.DASHBOARD}>
							<UserRoute>
								<Dashboard />
							</UserRoute>
						</PrivateRoute>

						<PrivateRoute exact path={ROUTES.MYPROFILE}>
							<UserRoute>
								<DisplayProfile />
							</UserRoute>
						</PrivateRoute>
						{/* <PrivateRoute exact path={ROUTES.DASHBOARD}>
							<UserRoute>
								<Dashboard />
							</UserRoute>
						</PrivateRoute> */}

						<PrivateRoute exact path={ROUTES.CREATEPROFILE}>
							<UserRoute>
								<CreateProfile />
							</UserRoute>
						</PrivateRoute>

						<PrivateRoute exact path={ROUTES.UPDATEPROFILE}>
							<UserRoute>
								<EditProfile />
							</UserRoute>
						</PrivateRoute>

						{/* User loans routes */}

						<PrivateRoute exact path={ROUTES.REQUESTLOAN}>
							<UserRoute>
								<RequestLoan />
							</UserRoute>
						</PrivateRoute>

						<PrivateRoute exact path={ROUTES.VIEWMYLOANS}>
							<UserRoute>
								<ViewMyLoans />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.LOANDETAILS}>
							<UserRoute>
								<LoanStatus />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.VIEWLOAN}>
							<UserRoute>
								<ViewLoan />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute path={ROUTES.PAYBACKLOAN}>
							<UserRoute>
								<PayBackLoan />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.BANKDETAILS}>
							<UserRoute>
								<BankDetails />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.CARDDETAILS}>
							<UserRoute>
								<CardDetails />
							</UserRoute>
						</PrivateRoute>

						{/* Admin routes */}

						<PrivateRoute exact path={ROUTES.ADMIN}>
							<AdminRoute>
								<AdminDashboard />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.VIEWUSERS}>
							<AdminRoute>
								<ViewUsers />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.UPDATEUSER}>
							<AdminRoute>
								<UpdateUser />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.VIEWSTATUS}>
							<AdminRoute>
								<ViewStatus />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.ADDBANK}>
							<AdminRoute>
								<AddBanks />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.VIEWBANKS}>
							<AdminRoute>
								<ViewBanks />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.VIEWLOANS}>
							<AdminRoute>
								<ViewUserLoans />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.VIEWUNPAIDLOAN}>
							<AdminRoute>
								<UnpaidLoans />
							</AdminRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.UPDATESTATUS}>
							<AdminRoute>
								<UpdateUserStatus />
							</AdminRoute>
						</PrivateRoute>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
