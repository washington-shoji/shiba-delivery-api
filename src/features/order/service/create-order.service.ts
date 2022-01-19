import {IOrderToClient} from '../interfaces/order.interface';
import {collections} from '../../../services/db/mongo-database.service';

export async function createOrderService(
	createOrderData: IOrderToClient
): Promise<IOrderToClient> {
	try {
		const newOrder: IOrderToClient = (await collections.order!.insertOne(
			createOrderData
		)) as unknown as IOrderToClient;

		return newOrder;
	} catch (error: any) {
		throw new Error('Unable to create order');
	}
}
