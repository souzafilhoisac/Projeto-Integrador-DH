const GetByIdCategoryService = require("../../services/categories/GetByIdCategoryService");
const logger = require("../../../winston-config");

class GetByIdCategoryOperation {
  execute(id) {
    logger.info("GetByIdCategoryOperation.execute");
    const category = GetByIdCategoryService.getById(id);

    return category;
  }
}

module.exports = GetByIdCategoryOperation;
