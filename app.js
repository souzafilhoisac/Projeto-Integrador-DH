require("dotenv").config();
require("./src/database");

const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

//Configutações
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join("public")));
app.use(cors());

// Importação de Rotas
const CategoryRoutes = require("./src/routes/CategoryRoutes");
const PaymentRoutes = require("./src/routes/PaymentRoutes");
const ProductRoutes = require("./src/routes/ProductRoutes");
const ProviderRoutes = require("./src/routes/ProviderRoutes");
const SaleRoutes = require("./src/routes/SaleRoutes");
const UserRoutes = require("./src/routes/UserRoutes");

const errorHandler = require("./src/middlewares/errorHandler");

// Rotas
app.use("/", CategoryRoutes);
app.use("/", PaymentRoutes);
app.use("/", ProductRoutes);
app.use("/", ProviderRoutes);
app.use("/", SaleRoutes);
app.use("/", UserRoutes);
app.use(errorHandler);

app.listen(process.env.SERVER_PORT, console.log(`Servidor rodando`));
