const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const connection = new Sequelize(dbConfig);

const User = require("../models/user");
const Address = require("../models/adresses");
const Product = require("../models/product");
const Resource = require("../models/resouce");
const Category = require("../models/category");
const Inventory = require("../models/inventory");
const Atributes = require("../models/atributes");

User.init(connection);
Address.init(connection);
Product.init(connection);
Resource.init(connection);
Category.init(connection);
Inventory.init(connection);
Atributes.init(connection);

User.associate(connection.models);
Address.associate(connection.models);
Product.associate(connection.models);
Resource.associate(connection.models);
Category.associate(connection.models);
Inventory.associate(connection.models);
Atributes.associate(connection.models);

module.exports = connection;
