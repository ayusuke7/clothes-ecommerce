const { Model, DataTypes } = require("sequelize");

class Resource extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        path: DataTypes.STRING,
        base64: DataTypes.STRING,
        svg: DataTypes.STRING,
        extension: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Product, {
      foreignKey: "resources_id",
      through: "products_has_resources",
      as: "products",
    });
  }
}

module.exports = Resource;
