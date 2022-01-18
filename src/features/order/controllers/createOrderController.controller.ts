import {Request, Response, NextFunction} from 'express';
import {IOrder} from '../interfaces/order.interface';
import * as orderService from '../service/order.service';

export async function createOrderController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const order: IOrder = req.body;
		const newItem: IOrder = await orderService.createOrder(order);

		res.status(201).json(newItem);
	} catch (error: any) {
		res.status(500).send(error.message);
	}
}
