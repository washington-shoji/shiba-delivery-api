import {IOrderToClient} from '../interfaces/order.interface';
import {collections} from '../../../services/db/mongo-database.service';
import {ObjectId, UpdateResult} from 'mongodb';

export async function updateOrderService(
	id: string,
	updateOrderData: IOrderToClient
): Promise<IOrderToClient> {
	try {
		const query = {_id: new ObjectId(id)};
		const updatedServiceResponse: UpdateResult =
			await collections.order!.updateOne(
				query,
				{
					$set: updateOrderData,
				},
				{upsert: false}
			);

		if (updatedServiceResponse?.modifiedCount === 0) {
			throw new Error('could not find order.');
		}

		const updatedOrder: IOrderToClient =
			updatedServiceResponse as unknown as IOrderToClient;

		return updatedOrder;
	} catch (error: any) {
		throw new Error(`Unable to update document, due to ${error.message}`);
	}
}
