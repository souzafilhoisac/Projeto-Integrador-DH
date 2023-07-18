const express = require("express");
const routes = express.Router();

const ProductController = require("../controllers/products/ProductController");

routes.get("/", ProductController.getAll);
routes.post("/categories/:id_category/products", ProductController.store);
routes.get("/:id", ProductController.getById);
routes.patch("/products/:id", ProductController.updateById);
routes.delete("/products/:id", ProductController.deleteById);

module.exports = routes;
