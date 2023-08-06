const CategoryRepository = require("../../database/repositories/categories/CategoryRepository");

module.exports = {
  async deleteById(id) {
    const category = await CategoryRepository.deleteCategoryById(id);

    return category;
  },
};
