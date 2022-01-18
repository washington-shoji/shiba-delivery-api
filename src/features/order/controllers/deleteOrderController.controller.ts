import {Request, Response, NextFunction} from 'express';
import {deleteOrderService} from '../service/delete-order.service';

export async function deleteOrderController(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const id: string = req.params.id;
		await deleteOrderService(id);

		res.status(200).send('Order deleted');
	} catch (error: any) {
		res.status(500).send(error.message);
	}
}
