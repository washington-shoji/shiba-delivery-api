import {Request, Response, NextFunction} from 'express';
import {IOrderToClient} from '../interfaces/order.interface';
import {updateOrderService} from '../service/update-order.service';

export async function updateOrderController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const id: string = req.params.id;
		const body: IOrderToClient = req.body;
		const updatedOrder: IOrderToClient = await updateOrderService(id, body);

		res.status(201).json(updatedOrder);
	} catch (error: any) {
		res.status(500).send(error.message);
	}
}
