import {FindCursor, WithId} from 'mongodb';
import {collections} from '../../../services/db/mongo-database.service';
import {IOrderToClient} from '../interfaces/order.interface';

export async function getAllOrderService(): Promise<IOrderToClient[]> {
	try {
		const fetchedOrders: IOrderToClient[] = [];
		// Passing a forEach through the cursor is a performance optimisations
		// As the .toArray({}), can lead to memory exhaustion or performances issues
		// In the case of a large collection of documents
		const fetchedServiceCursor: FindCursor<WithId<IOrderToClient>> =
			collections.order!.find({});

		const fetchedServiceData: void = await fetchedServiceCursor.forEach(
			(doc) => {
				fetchedOrders.push(doc);
			}
		);

		return fetchedOrders;
	} catch (error) {
		throw new Error('Unable to fetch orders');
	}
}
