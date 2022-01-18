import express from 'express';
import {createOrderController} from '../controllers/createOrderController.controller';
import {deleteOrderController} from '../controllers/deleteOrderController.controller';
import {updateOrderController} from '../controllers/updateOrderController.controller';

export const orderRouter = express.Router();

orderRouter.post('/order/', createOrderController);
orderRouter.put('/order/:id', updateOrderController);
orderRouter.delete('/order/:id', deleteOrderController);
