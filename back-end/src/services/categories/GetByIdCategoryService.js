const CategoryRepository = require("../../database/repositories/categories/CategoryRepository");

module.exports = {
  async getById(id) {
    const category = await CategoryRepository.getCategoryById(id);

    return category;
  },
};
