//public
export const HOME = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const ABOUT = "/about";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/reset-password/:token";

//private

//User
export const DASHBOARD = "/dashboard";
export const MYPROFILE = `${DASHBOARD}/my-profile`;
export const CREATEPROFILE = `${DASHBOARD}/create-profile`;
export const UPDATEPROFILE = `${DASHBOARD}/update-profile`;
// export const GENERATE_QR = `${DASHBOARD}/generate-qr`;
// export const PRESCRIPTION = '/prescription/:id';

//User(Loans)
export const REQUESTLOAN = `${DASHBOARD}/request-loan`;
export const VIEWMYLOANS = `${DASHBOARD}/view-my-loans`;
export const LOANDETAILS = `${DASHBOARD}/loan-details`; //LOAN STATUS
export const VIEWLOAN = `${DASHBOARD}/view-loan/:id`;
export const PAYBACKLOAN = `${DASHBOARD}/payback-loan/:id`;
export const BANKDETAILS = `${DASHBOARD}/bank-details`;
export const CARDDETAILS = `${DASHBOARD}/card-details`;

//admin routes
export const ADMIN = "/admin";
export const VIEWUSERS = `${ADMIN}/view-users/`;
export const UPDATEUSER = `${ADMIN}/update-user/:id`;
export const VIEWBANKS = `${ADMIN}/view-banks`;
export const PENDING = `${ADMIN}/pending-loans`;
export const VIEWLOANS = `${ADMIN}/view-loans/:id`;
export const ADDBANK = `${ADMIN}/add-bank`;
export const VIEWALLLOANS = `${ADMIN}/view-all-loans`;
export const VIEWUNPAIDLOAN = `${ADMIN}/view-unpaid-loans`;
export const UPDATESTATUS = `${ADMIN}/update-status/:id`;
export const VIEWSTATUS = `${ADMIN}/get-status-by-id/:id`;

// export const GRANTLOAN = `${ADMIN}/grant-loan/:id`;
