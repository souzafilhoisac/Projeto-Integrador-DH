//Importação do sequelize
const Sequelize = require("sequelize");

//Importação das configurações do banco de dados
const dbConfig = require("../config/database");

//Conexão do Sequelize com o banco de dados
const connection = new Sequelize(dbConfig);

//Importação das models
const Category = require("../database/models/categories/CategoryModel");
const Provider = require("../database/models/providers/ProviderModel");
const Products = require("../database/models/products/ProductModel");
const Payment = require("../database/models/payments/PaymentModel");
const User = require("../database/models/users/UserModel");
const Sale = require("../database/models/sales/SaleModel");
const SaleItem = require("../database/models/sellItems/SallItemModel");

//Inicialização das models
Category.init(connection);
Provider.init(connection);
Products.init(connection);
Payment.init(connection);
User.init(connection);
Sale.init(connection);
SaleItem.init(connection);

//Associação das models
Products.associate(connection.models);
Sale.associate(connection.models);
SaleItem.associate(connection.models);

module.exports = connection;
