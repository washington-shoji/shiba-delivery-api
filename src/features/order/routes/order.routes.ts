import express from 'express';
import {jwtCheck} from '../../../middleware/authzero.middleware';
import {createOrderController} from '../controllers/createOrderController.controller';
import {deleteOrderController} from '../controllers/deleteOrderController.controller';
import {getAllOrderController} from '../controllers/getAllOrderController.controller';
import {getSingleOrderController} from '../controllers/getSingleOrder.controller';
import {updateOrderController} from '../controllers/updateOrderController.controller';

export const orderRouter = express.Router();

// Mount authorization middleware

orderRouter.use(jwtCheck);

orderRouter.post('/order/', createOrderController);
orderRouter.put('/order/:id', updateOrderController);
orderRouter.delete('/order/:id', deleteOrderController);
orderRouter.get('/order/', getAllOrderController);
orderRouter.get('/order/:id', getSingleOrderController);
