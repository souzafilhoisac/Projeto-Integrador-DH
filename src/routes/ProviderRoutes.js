const express = require("express");
const routes = express.Router();

const ProviderController = require("../controllers/providers/ProviderController");

routes.get("/providers", ProviderController.getAll);
routes.post("/providers", ProviderController.store);
routes.get("/providers/:id", ProviderController.getById);
routes.patch("/providers/:id", ProviderController.updateById);
routes.delete("/providers/:id", ProviderController.deleteById);

module.exports = routes;
