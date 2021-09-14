const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const authController = {
  async autenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }

      const isValid = await bcrypt.compare(password, user.password);

      if (!isValid) {
        return res.status(403).send({ message: "email or password inválid" });
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
      return res.status(500).send({ message: error });
    }
  },

  async register(req, res) {
    try {
      const { password, ...rest } = req.body;

      const exists = await User.findOne({ where: { email: rest.email } });

      if (exists) {
        return res.status(404).send({ message: "user is exists" });
      }

      const encrypPass = bcrypt.hashSync(password, 7);

      const user = await User.create(
        {
          password: encrypPass,
          ...rest,
        },
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
      return res.status(500).send({ message: error });
    }
  },
};

module.exports = authController;
