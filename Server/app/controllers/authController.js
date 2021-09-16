const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { Op } = require("sequelize");
const User = require("../models/user");
const {
  getNotFound,
  getAlreadyExists,
  STATUS_MESSAGE,
} = require("../utils/commons");

const authController = {
  async autenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).send({
          message: getNotFound(email),
        });
      }

      const isValid = await bcrypt.compare(password.trim(), user.password);

      if (!isValid) {
        return res.status(403).send({
          message: STATUS_MESSAGE.EMAIL_OR_PASS_INCORRECT,
        });
      }

      user.password = "<locked>";

      const token = jwt.sign({ user }, process.env.KEY_JWT, {
        expiresIn: "1d",
      });

      return res.send({
        result: {
          token,
          user,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
    }
  },

  async register(req, res) {
    try {
      const { email, cpf, ...rest } = req.body;

      const exists = await User.findOne({
        where: { [Op.or]: { email, cpf } },
      });

      if (exists) {
        return res.status(404).send({
          message: getAlreadyExists("Usuário"),
        });
      }

      const password = bcrypt.hashSync(rest.password, 7);

      const user = await User.create(
        { ...rest, password, email, cpf },
        {
          include: [
            {
              association: "addresses",
            },
            {
              association: "contacts",
            },
          ],
        }
      );

      return res.send({ result: user });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: STATUS_MESSAGE.SERVER_ERROR,
      });
    }
  },
};

module.exports = authController;
