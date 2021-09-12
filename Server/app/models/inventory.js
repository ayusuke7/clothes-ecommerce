const { Model, DataTypes } = require("sequelize");

class Inventory extends Model {
  static init(sequelize) {
    super.init(
      {
        amount: DataTypes.NUMBER,
        limit: DataTypes.NUMBER,
      },
      {
        sequelize,
        tableName: "inventory",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Product, {
      foreignKey: "products_id",
      as: "product",
    });

    this.belongsTo(models.Atributes, {
      foreignKey: "atributes_id",
      as: "atribute",
    });
  }
}

module.exports = Inventory;
