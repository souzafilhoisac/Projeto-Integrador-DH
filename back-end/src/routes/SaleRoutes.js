const express = require("express");
const routes = express.Router();

const SaleController = require("../controllers/sales/SaleController");

routes.get("/sale", SaleController.getAll);
routes.post("/sale", SaleController.store);
routes.get("/sale/:id", SaleController.getById);
routes.patch("/sale/:id", SaleController.updateById);
routes.delete("/sale/:id", SaleController.deleteById);

module.exports = routes;
