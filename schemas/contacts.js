const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().min(3).max(40).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
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
