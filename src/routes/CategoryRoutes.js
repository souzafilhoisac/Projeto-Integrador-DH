const express = require("express");
const routes = express.Router();
const container = require("../factories/container");
const { getAll } = container.resolve("categoryController");

routes.get("/category", getAll);
/*routes.post("/categories", categoryController.store);
routes.get("/categories/:id", categoryController.getById);
routes.patch("/categories/:id", categoryController.updateById);
routes.delete("/categories/:id", categoryController.deleteById);*/

module.exports = routes;
