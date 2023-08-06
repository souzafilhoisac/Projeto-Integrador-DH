const GetAllCategoriesService = require("../../services/categories/GetAllCategoriesService");
const logger = require("../../../winston-config");

class GetAllCategoryOperation {
  execute() {
    logger.info("GetAllCategoryOperation.execute");
    const categories = GetAllCategoriesService.allCategories();

    return categories;
  }
}

module.exports = GetAllCategoryOperation;
