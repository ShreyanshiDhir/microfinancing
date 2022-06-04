const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

//for security
const mongoSantize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
// const hpp = require("hpp");
const cors = require("cors");

//colors for console
require("colors");

// Connect Database
connectDB();

// INIT middleware

app.use(express.json()); //this is the build in express body-parser
app.use(
	//this mean we don't need to use body-parser anymore
	express.urlencoded({
		extended: true,
	})
);
//Dev Logging Middleware
if (1 == 1) {
	app.use(morgan("dev"));
}
//set security headers
app.use(helmet({ contentSecurityPolicy: false }));

//prevent xss attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 mins
	max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

//Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/users", require("./routes/users"));

//errorHandler
app.use(require("./middleware/error"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server Started on Port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	// Close server & exit process
	//server.close(() => process.exit(1));
});
