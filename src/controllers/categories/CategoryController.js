/*const GetAllCategoryOperation = require("../../operation/category/GetAllCategoryOperation");
const StoreCategoryOperation = require("../../operation/category/StoreCategoryOperation");
const GetByIdCategoryOperation = require("../../operation/category/GetByIdCategoryOperation");
const UpdateByIdCategoryOperation = require("../../operation/category/UpdateByIdCategoryOperation");
const DeleteByIdCategoryOperation = require("../../operation/category/DeleteByIdCategoryOperation");
const logger = require("../../../winston-config");

module.exports = {
  async getAll(_req, res, next) {
    try {
      const categories = await GetAllCategoryOperation.execute();
      return res.json(categories);
    } catch (error) {
      logger.info("CategoryController.getAll.error");
      next(error);
    }
  },

  async store(req, res, next) {
    const { name } = req.body;
    try {
      const category = await StoreCategoryOperation.execute(name);
      return res.status(201).json(category);
    } catch (error) {
      logger.info("CategoryController.store.error");
      next(error);
    }
  },
  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const category = await GetByIdCategoryOperation.execute(id);

      return res.status(200).json(category);
    } catch (error) {
      logger.info("CategoryController.getById.error");
      next(error);
    }
  },
  async updateById(req, res, next) {
    try {
      const category = await UpdateByIdCategoryOperation.execute(req);

      return res.status(200).json(category);
    } catch (error) {
      logger.info("CategoryController.updateById.error");
      next(error);
    }
  },

  async deleteById(req, res, next) {
    const { id } = req.params;
    try {
      const category = await DeleteByIdCategoryOperation.execute(id);

      return res.status(200).json(category);
    } catch (error) {
      logger.info("CategoryController.deleteById.error");
      next(error);
    }
  },
};

class CategoryController {
  constructor({
    getAllCategoryOperation,
    storeCategoryOperation,
    getByIdCategoryOperation,
    updateByIdCategoryOperation,
    deleteByIdCategoryOperation,
    logger,
  }) {
    this.storeCategoryOperation = storeCategoryOperation;
    this.getByIdCategoryOperation = getByIdCategoryOperation;
    this.updateByIdCategoryOperation = updateByIdCategoryOperation;
    this.deleteByIdCategoryOperation = deleteByIdCategoryOperation;
    this.logger = logger;
  }

  async getAll(_req, res, next) {
    try {
      const categories = await getAllCategoryOperation.execute();
      return res.json(categories);
    } catch (error) {
      //this.logger.info("CategoryController.getAll.error");
      next(error);
    }
  }

  async store(req, res, next) {
    const { name } = req.body;
    try {
      const category = await this.storeCategoryOperation.execute(name);
      return res.status(201).json(category);
    } catch (error) {
      this.logger.info("CategoryController.store.error");
      next(error);
    }
  }

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const category = await this.getByIdCategoryOperation.execute(id);

      return res.status(200).json(category);
    } catch (error) {
      this.logger.info("CategoryController.getById.error");
      next(error);
    }
  }

  async updateById(req, res, next) {
    try {
      const category = await this.updateByIdCategoryOperation.execute(req);

      return res.status(200).json(category);
    } catch (error) {
      this.logger.info("CategoryController.updateById.error");
      next(error);
    }
  }

  async deleteById(req, res, next) {
    const { id } = req.params;
    try {
      const category = await this.deleteByIdCategoryOperation.execute(id);

      return res.status(200).json(category);
    } catch (error) {
      this.logger.info("CategoryController.deleteById.error");
      next(error);
    }
  }
}

module.exports = CategoryController;
*/
module.exports = ({ getAllCategoryOperation }) => ({
  async getAll(_req, res, next) {
    try {
      const categories = await getAllCategoryOperation.execute();
      return res.json(categories);
    } catch (error) {
      //this.logger.info("CategoryController.getAll.error");
      next(error);
    }
  },
});
