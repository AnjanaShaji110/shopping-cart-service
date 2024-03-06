const { Router } = require("express");
const { signUp, login } = require("../contoller/auth.controller");
const auth = Router();

auth.post("/signup", signUp);
auth.post("/login", login);

module.exports = auth;
