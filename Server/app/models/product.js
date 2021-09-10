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
    // this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
  }
}

module.exports = Product;
