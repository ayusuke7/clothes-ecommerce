const { Model, DataTypes } = require("sequelize");

class Contact extends Model {
  static init(sequelize) {
    super.init(
      {
        cellphone: DataTypes.STRING,
        email: DataTypes.INTEGER,
        phone: DataTypes.STRING,
        site: DataTypes.STRING,
        whatsapp: DataTypes.TINYINT,
      },
      {
        sequelize,
        tableName: "contacts",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "users_id", as: "user" });
  }
}

module.exports = Contact;
