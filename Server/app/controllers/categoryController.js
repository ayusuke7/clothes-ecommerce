const Category = require("../models/category");
const { STATUS_MESSAGE } = require("../utils/commons");

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
      res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
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
      res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
    }
  },

  async store(req, res) {
    try {
      const category = await Category.create(req?.body);
      res.status(200).json({ result: category });
    } catch (error) {
      res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
    }
  },

  async update(req, res) {
    try {
      const category = await Category.findByPk(req.params.id);

      if (!category) {
        return res.status(404).json({
          message: STATUS_MESSAGE.NOTFOUND,
        });
      }

      category.name = req.body?.name;
      category.description = req.body?.description;

      await category.save();

      res.status(200).json({
        message: `Category ${category.id} updated`,
      });
    } catch (error) {
      res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
    }
  },

  async delete(req, res) {
    try {
      res.status(200).json({
        message: "delete method",
      });
    } catch (error) {
      return res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
    }
  },
};

module.exports = categoryController;
