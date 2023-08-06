const { createContainer, asClass, asValue, asFunction } = require("awilix");

const GetAllCategoryOperation = require("../operation/category/GetAllCategoryOperation");
const StoreCategoryOperation = require("../operation/category/StoreCategoryOperation");
const GetByIdCategoryOperation = require("../operation/category/GetByIdCategoryOperation");
const UpdateByIdCategoryOperation = require("../operation/category/UpdateByIdCategoryOperation");
const DeleteByIdCategoryOperation = require("../operation/category/DeleteByIdCategoryOperation");
const CategoryController = require("../controllers/categories/CategoryController");

const logger = require("../../winston-config");

const container = createContainer();

container.register({
  categoryController: asFunction(CategoryController).singleton(),
  getAllCategoryOperation: asClass(GetAllCategoryOperation),
  storeCategoryOperation: asClass(StoreCategoryOperation),
  getByIdCategoryOperation: asClass(GetByIdCategoryOperation),
  updateByIdCategoryOperation: asClass(UpdateByIdCategoryOperation),
  deleteByIdCategoryOperation: asClass(DeleteByIdCategoryOperation),
  logger: asValue(logger),
});

module.exports = container;
