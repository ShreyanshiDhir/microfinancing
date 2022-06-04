import {
	DASHBOARD,
	LOGIN,
	MYPROFILE,
	REGISTER,
	ADMIN,
	VIEWUSERS,
	VIEWBANKS,
	PENDING,
} from "../../../constants/routes";

export const MenuItems = [
	{
		title: "Login",
		url: LOGIN,
		cName: "nav-links",
	},
	{
		title: "Sign up",
		url: REGISTER,
		cName: "nav-links",
	},
];

//private links

export const UserLinks = [
	{
		title: "Dashboard",
		url: DASHBOARD,
		cName: "nav-links",
	},
	{
		title: "My Profile",
		url: MYPROFILE,
		cName: "nav-links",
	},
];

export const AdminLinks = [
	{
		title: "Dashboard",
		url: ADMIN,
		cName: "nav-links",
	},
	{
		title: "All Users",
		url: VIEWUSERS,
		cName: "nav-links",
	},
	{
		title: "Banks",
		url: VIEWBANKS,
		cName: "nav-links",
	},
	{
		title: "Pending Loans",
		url: PENDING,
		cName: "nav-links",
	},
];
