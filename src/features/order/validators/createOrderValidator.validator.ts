import Joi from 'joi';

export const createOrderValidation = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().email().required(),
	phone: Joi.number().required(),
	quantity: Joi.number().required(),
});
