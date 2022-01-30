import Joi from 'joi';

export const deleteOrderIdValidation = Joi.object({
	id: Joi.string().required(),
});
