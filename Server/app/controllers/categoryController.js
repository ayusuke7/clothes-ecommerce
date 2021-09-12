const Category = require("../models/category");

const categoryController = {
  async all(req, res) {
    try {
      const result = await Category.findAll({
        include: {
          association: "resource",
        },
      });
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  async find(req, res) {
    try {
      const result = await Category.findByPk(req.params.id, {
        include: {
          association: "resource",
        },
      });
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  async store(req, res) {
    try {
      const category = await Category.create(req?.body);
      res.status(200).json({ result: category });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  async update(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }

      category.name = req.body?.name;
      category.description = req.body?.description;

      await category.save();

      res.status(200).json({ message: `Category ${category.id} updated` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  async delete(req, res) {
    res.status(200).json({ message: "delete method" });
  },
};

module.exports = categoryController;
