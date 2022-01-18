import {Request, Response, NextFunction} from 'express';
import {IOrderToClient} from '../interfaces/order.interface';
import {createOrderService} from '../service/create-order.service';

export async function createOrderController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const order: IOrderToClient = req.body;
		console.log('ORDER', order);

		const newItem: IOrderToClient = await createOrderService(order);

		res.status(201).json(newItem);
	} catch (error: any) {
		res.status(500).send(error.message);
	}
}
