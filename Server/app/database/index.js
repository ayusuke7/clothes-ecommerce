const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const connection = new Sequelize(dbConfig);

const User = require("../models/user");
const Address = require("../models/adresses");
const Product = require("../models/product");

User.init(connection);
Address.init(connection);
Product.init(connection);

User.associate(connection.models);
Address.associate(connection.models);

module.exports = connection;
