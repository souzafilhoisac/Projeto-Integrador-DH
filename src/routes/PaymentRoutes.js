const express = require("express");
const routes = express.Router();

const PaymentController = require("../controllers/payments/PaymentController");

routes.get("/payment", PaymentController.getAll);
routes.post("/payment", PaymentController.store);
routes.get("/payment/:id", PaymentController.getById);
routes.patch("/payment/:id", PaymentController.updateById);
routes.delete("/payment/:id", PaymentController.deleteById);

module.exports = routes;
