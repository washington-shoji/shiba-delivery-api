import express from 'express';
import {jwtCheck} from '../../../middleware/authzero.middleware';
import {requestBodyValidation} from '../../../middleware/request-body-validation.middleware';
import {requestParamsValidation} from '../../../middleware/request-params-validation.middleware';
import {createOrderController} from '../controllers/createOrderController.controller';
import {deleteOrderController} from '../controllers/deleteOrderController.controller';
import {getAllOrderController} from '../controllers/getAllOrderController.controller';
import {getSingleOrderController} from '../controllers/getSingleOrder.controller';
import {updateOrderController} from '../controllers/updateOrderController.controller';
import {createOrderValidation} from '../validators/createOrderValidator.validator';
import {deleteOrderIdValidation} from '../validators/deleteOrderValidator.validator';
import {
	updateOrderIdValidation,
	updateOrderValidation,
} from '../validators/updateOrderValidator.validator';

export const orderRouter = express.Router();

// Mount authorization middleware
orderRouter.use(jwtCheck);

orderRouter.post(
	'/order/',
	requestBodyValidation(createOrderValidation),
	createOrderController
);
orderRouter.put(
	'/order/:id',
	[
		requestParamsValidation(updateOrderIdValidation),
		requestBodyValidation(updateOrderValidation),
	],
	updateOrderController
);
orderRouter.delete(
	'/order/:id',
	requestParamsValidation(deleteOrderIdValidation),
	deleteOrderController
);
orderRouter.get('/order/', getAllOrderController);
orderRouter.get('/order/:id', getSingleOrderController);
