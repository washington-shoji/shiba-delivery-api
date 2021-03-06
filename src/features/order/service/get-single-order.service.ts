import {ObjectId, WithId} from 'mongodb';
import {collections} from '../../../services/db/mongo-database.service';
import {IOrderToClient} from '../interfaces/order.interface';

export async function getSingleOrderService(
	id: string
): Promise<IOrderToClient> {
	try {
		const query = {_id: new ObjectId(id)};
		const fetchedServiceResponse: WithId<IOrderToClient> | null =
			await collections.order!.findOne(query);

		if (!fetchedServiceResponse?._id) {
			throw new Error('could not find the order');
		}
		const fetchedOrder: IOrderToClient = fetchedServiceResponse;
		return fetchedOrder;
	} catch (error: any) {
		throw new Error(`Unable to fetch order, due to ${error.message}`);
	}
}
