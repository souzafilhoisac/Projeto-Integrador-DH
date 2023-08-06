const CategoryRepository = require("../../database/repositories/categories/CategoryRepository");

module.exports = {
  async updateById(data) {
    const category = await CategoryRepository.updateCategoryById(data);

    return category;
  },
};
