const UpdateByIdCategoryService = require("../../services/categories/UpdateByIdCategoryService");
const logger = require("../../../winston-config");

module.exports = {
  execute: (data) => {
    logger.info("UpdateByIdCategoryOperation.execute");
    const category = UpdateByIdCategoryService.updateById(data);

    return category;
  },
};
