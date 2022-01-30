import Joi from 'joi';

export const updateOrderValidation = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.number().required(),
	quantity: Joi.number().required(),
});

export const updateOrderIdValidation = Joi.object({
	id: Joi.string().required(),
});
