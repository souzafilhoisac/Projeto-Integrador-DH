const GetByIdCategoryService = require("../../services/categories/GetByIdCategoryService");
const logger = require("../../../winston-config");

module.exports = {
  execute: (id) => {
    logger.info("GetByIdCategoryOperation.execute");
    const category = GetByIdCategoryService.getById(id);

    return category;
  },
};
