const CategoryRepository = require("../../database/repositories/categories/CategoryRepository");

module.exports = {
  async allCategories() {
    const categories = await CategoryRepository.getAllCategories();

    return categories;
  },
};
