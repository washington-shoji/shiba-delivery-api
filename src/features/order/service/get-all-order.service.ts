import {WithId} from 'mongodb';
import {collections} from '../../../services/db/mongo-database.service';
import {IOrderToClient} from '../interfaces/order.interface';

export async function getAllOrderService(): Promise<IOrderToClient[]> {
	try {
		const fetchedServiceResponse: WithId<IOrderToClient>[] = await collections
			.order!.find({})
			.toArray();

		const fetchedOrders: IOrderToClient[] = fetchedServiceResponse;

		return fetchedOrders;
	} catch (error) {
		throw new Error('Unable to fetch orders');
	}
}
