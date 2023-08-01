const DeleteByIdCategoryService = require("../../services/categories/DeleteByIdCategoryService");
const logger = require("../../../winston-config");

class DeleteByIdCategoryOperation {
  execute(id) {
    logger.info("DeleteByIdCategoryOperation.execute");
    const category = DeleteByIdCategoryService.deleteById(id);

    return category;
  }
}

module.exports = DeleteByIdCategoryOperation;
