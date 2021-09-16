const jwt = require("jsonwebtoken");
const { STATUS_MESSAGE } = require("../utils/commons");

module.exports = (unlessMethod = [], unlessPath = []) => {
  return async function (req, res, next) {
    const methodValid = unlessMethod?.some((m) => m === req.method);
    const pathValid = unlessPath?.some((p) => p === req.path);

    if (pathValid || methodValid) return next();

    /*  Validate Token JWT */
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).send({
        message: STATUS_MESSAGE.UNAUTORIZED,
      });
    }

    const token = authorization.replace("Bearer", "").trim();

    try {
      const payload = jwt.verify(token, process.env.KEY_JWT);
      req["payload"] = payload;

      return next();
    } catch (e) {
      return res.status(500).send({ message: e });
    }
  };
};
