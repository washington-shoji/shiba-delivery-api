import {IOrder} from './../interfaces/order.interface';
import {collections} from '../../../services/db/mongo-database.service';

export const createOrder = async (newOrder: IOrder): Promise<IOrder> => {
	try {
		const order: IOrder = (await collections.order?.insertOne(
			newOrder
		)) as unknown as IOrder;

		if (!order) {
			throw new Error('Could not create order');
		}
		return order;
	} catch (error: any) {
		console.log('CREATE ERROR', error.message);

		throw new Error('Unable to create order');
	}
};
