const express = require("express");
const routes = express.Router();
//const container = require("../factories/container");
//const categoryController = container.resolve("categoryController");
const CategoryController = require("../controllers/categories/CategoryController");

routes.get("/category", CategoryController.getAll);
routes.post("/categories", CategoryController.store);
routes.get("/categories/:id", CategoryController.getById);
routes.patch("/categories/:id", CategoryController.updateById);
routes.delete("/categories/:id", CategoryController.deleteById);

module.exports = routes;
