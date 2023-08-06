const CategoryModel = require("../../../database/models/categories/CategoryModel");

module.exports = {
  async getAllCategories() {
    const categories = await CategoryModel.findAll();
    return categories;
  },

  async storeOneCategorie(name) {
    try {
      const existingCategory = await CategoryModel.findOne({ where: { name } });

      if (existingCategory) {
        throw new Error("Category already exists.");
      }

      const category = await CategoryModel.create({ name });

      return category;
    } catch (error) {
      throw error;
    }
  },
  async getCategoryById(id) {
    try {
      const categoryFound = await CategoryModel.findByPk(id);

      if (!categoryFound) {
        throw new Error("Category not found.");
      }
      return categoryFound;
    } catch (error) {
      throw error;
    }
  },
  async updateCategoryById(data) {
    const { body, params } = data;
    try {
      const categoryFound = await CategoryModel.findByPk(params.id);

      if (!categoryFound) {
        throw new Error("Category not found.");
      }

      categoryFound.set(body);

      const categoryUpdated = await categoryFound.save();

      return categoryUpdated;
    } catch (error) {
      throw error;
    }
  },

  async deleteCategoryById(id) {
    try {
      const categoryFound = await CategoryModel.findByPk(id);

      if (!categoryFound) {
        throw new Error("Category not found.");
      }

      categoryFound.destroy();

      return { Message: "Category deleted successfully!" };
    } catch (error) {
      throw error;
    }
  },
};
