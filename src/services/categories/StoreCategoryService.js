const CategoryRepository = require("../../database/repositories/categories/CategoryRepository");

module.exports = {
  async storeCategory(name) {
    const category = await CategoryRepository.storeOneCategorie(name);

    return category;
  },
};
