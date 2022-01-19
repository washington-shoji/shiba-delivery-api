import {Request, Response, NextFunction} from 'express';
import {IOrderToClient} from '../interfaces/order.interface';
import {getAllOrderService} from '../service/get-all-order.service';

export async function getAllOrderController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const orders: IOrderToClient[] = await getAllOrderService();

		res.status(200).send(orders);
	} catch (error: any) {
		res.status(500).send(error.message);
	}
}
