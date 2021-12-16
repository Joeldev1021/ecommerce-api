const { validationResult } = require("express-validator");

const validationFields = (req, res, next) => {
  const errros = validationResult(req);
  console.log("errors ", errros);
  if (!errros.isEmpty()) {
    return res.status(400).json({ errors: errros.array() });
  }
  next();
};

module.exports = { validationFields };
