const GetAllCategoriesService = require("../../services/categories/GetAllCategoriesService");
const logger = require("../../../winston-config");

module.exports = {
  execute: () => {
    logger.info("GetAllCategoryOperation.execute");
    const categories = GetAllCategoriesService.allCategories();

    return categories;
  },
};
