import express from 'express';
import {createOrderController} from '../controllers/createOrderController.controller';

export const orderRouter = express.Router();

orderRouter.post('/', createOrderController);
