const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors());

server.use(express.json());
server.use("/", routes);

module.exports = server;
