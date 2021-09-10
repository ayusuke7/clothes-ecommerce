const User = require("../models/user");

const userController = {
  async all(req, res) {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json({ result: users });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  async find(req, res) {
    try {
      const users = await User.findByPk(req.params.id);
      res.status(200).json({ result: users });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  async update(req, res) {
    try {
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      user.firstname = req.body?.firstname;
      user.lastname = req.body?.lastname;
      user.email = req.body?.email;

      await user.save();

      res.status(200).json({ message: `user ${user.id} updated` });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
  async delete(req, res) {
    res.status(200).json({ message: "delete method" });
  },
};

module.exports = userController;
