const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static init(sequelize) {
    super.init(
      {
        address: DataTypes.STRING,
        district: DataTypes.STRING,
        number: DataTypes.INTEGER,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        country: DataTypes.STRING,
        zipcode: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "users_id", as: "user" });
  }
}

module.exports = Address;
