const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        sku: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.STRING,
        off: DataTypes.NUMBER,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Resource, {
      foreignKey: "products_id",
      through: "products_has_resources",
      as: "resources",
      timestamps: false,
    });

    this.belongsToMany(models.Category, {
      foreignKey: "products_id",
      through: "products_has_categorys",
      as: "categorys",
      timestamps: false,
    });

    this.hasMany(models.Inventory, {
      foreignKey: "products_id",
      as: "inventory",
    });
  }
}

module.exports = Product;
