import {IOrderToClient} from '../interfaces/order.interface';
import {collections} from '../../../services/db/mongo-database.service';
import {ObjectId} from 'mongodb';

export async function updateOrderService(
	id: string,
	updateOrderData: IOrderToClient
): Promise<IOrderToClient> {
	try {
		const query = {_id: new ObjectId(id)};
		const updatedOrder: IOrderToClient = (await collections.order?.updateOne(
			query,
			{
				$set: updateOrderData,
			},
			{upsert: false}
		)) as unknown as IOrderToClient;

		return updatedOrder;
	} catch (error: any) {
		throw new Error('Unable to update document');
	}
}
