const express = require("express");
const routes = express.Router();

const UserController = require("../controllers/users/UserController");

routes.get("/user", UserController.getAll);
routes.post("/user", UserController.store);
routes.get("/user/:id", UserController.getById);
routes.patch("/user/:id", UserController.updateById);
routes.delete("/user/:id", UserController.deleteById);

module.exports = routes;
