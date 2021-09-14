const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        tags: DataTypes.STRING,
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "categorys",
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      foreignKey: "categorys_id",
      through: "products_has_categorys",
      as: "products",
    });

    this.belongsTo(models.Resource, {
      foreignKey: "resources_id",
      as: "resource",
    });
  }
}

module.exports = Category;
