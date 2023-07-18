const StoreCategoryService = require("../../services/categories/StoreCategoryService");
const logger = require("../../../winston-config");

module.exports = {
  execute: (name) => {
    logger.info("StoreCategoryOperation.execute");
    const categories = StoreCategoryService.storeCategory(name);

    return categories;
  },
};
