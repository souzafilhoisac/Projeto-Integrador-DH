const express = require("express");
const routes = express.Router();

//Importação dos middlewares
const { Authorize } = require("../middlewares/Authentication");

//Importação dos controllers
const { ValidationUser } = require("../controllers/auth/AuthController");

//Rota de autenticação
routes.post("/auth", ValidationUser);

module.exports = routes;
