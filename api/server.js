// Packages
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Routers
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router.js");
const storiesRouter = require("../stories/stories-router.js");

// Server 
const server = express();
server.use(helmet());
server.use(express.json());
server.use(cors());

// Endpoints
server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);
server.use("/api/stories", storiesRouter);

server.get("/", (req, res) => {
    res.send("Yay! Server is Up and Running! Welcome to Build Week.");
})

module.exports = server;