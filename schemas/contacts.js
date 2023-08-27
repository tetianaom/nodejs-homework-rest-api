const Joi = require("joi");
const emailRegexp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const addSchema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string().pattern(emailRegexp).required(),
  phone: Joi.string().min(10).max(15).required(),
  favorite: Joi.boolean(),
}).messages({
  "any.required": "missing required {{#label}} field",
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  addSchema,
  updateFavoriteSchema,
};
