const UpdateByIdCategoryService = require("../../services/categories/UpdateByIdCategoryService");
const logger = require("../../../winston-config");

class UpdateByIdCategoryOperation {
  execute(data) {
    logger.info("UpdateByIdCategoryOperation.execute");
    const category = UpdateByIdCategoryService.updateById(data);

    return category;
  }
}

module.exports = UpdateByIdCategoryOperation;
