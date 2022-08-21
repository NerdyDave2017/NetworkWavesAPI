const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const connectDB = require("./connection.js");
const router = require("./server/routes/index.js");

const app = express();

dotenv.config({ path: ".env" });

let corsOptions = {
  origin: "*",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));
app.use(cookieParser());

// mongoDB Connection
connectDB();

// Load Routers
app.use("/api/v1", router);

module.exports = app;
