import Joi from "joi";

export const updateProductDto = Joi.object({
  name: Joi.string().optional(),
  price: Joi.number().optional()
});


