const { Model, DataTypes } = require("sequelize");

class Atributes extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        value: DataTypes.STRING,
      },
      {
        sequelize,
        tableName: "atributes",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Inventory, {
      foreignKey: "atributes_id",
      as: "inventory",
    });
  }
}

module.exports = Atributes;
