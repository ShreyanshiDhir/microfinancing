import auth from "./auth";
import loading from "./loading";
import alert from "./alert";
import profile from "./profile";
import admin from "./admin";
import users from "./users";
const rootReducer = {
	loading,
	auth,
	alert,
	profile,
	admin,
	users,
};

export default rootReducer;
