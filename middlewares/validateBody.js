const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return next(HttpError(400, "missing fields"));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

const validateBodyFavorite = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return next(HttpError(400, "missing field favorite"));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = {
  validateBody,
  validateBodyFavorite,
};
