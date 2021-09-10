const Product = require("../models/product");

const productController = {
  async all(req, res) {
    try {
      const result = await Product.findAll();
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  async find(req, res) {
    try {
      const result = await Product.findByPk(req.params.id);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },

  async store(req, res) {
    try {
      const result = await Product.create(req.body);
      res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  async update(req, res) {
    try {
      const produto = await Product.findByPk(req.params.id);

      if (!produto) {
        return res.status(404).json({ message: "product not found" });
      }

      produto.sku = req.body?.sku;
      produto.off = req.body?.off;
      produto.name = req.body?.name;
      produto.price = req.body?.price;
      produto.description = req.body?.description;

      await produto.save();

      res.status(200).json({ message: `product ${produto.id} updated` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  async delete(req, res) {
    res.status(200).json({ message: "delete method" });
  },
};

module.exports = productController;
