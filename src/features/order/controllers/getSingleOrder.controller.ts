import {Request, Response, NextFunction} from 'express';
import {IOrderToClient} from '../interfaces/order.interface';
import {getSingleOrderService} from '../service/get-single-order.service';

export async function getSingleOrderController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const id: string = req.params.id;
		const order: IOrderToClient = await getSingleOrderService(id);

		res.status(200).json(order);
	} catch (error: any) {
		res.status(500).send(error.message);
	}
}
