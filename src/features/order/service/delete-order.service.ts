import {collections} from '../../../services/db/mongo-database.service';
import {DeleteResult, ObjectId} from 'mongodb';

export async function deleteOrderService(id: string): Promise<void | null> {
	try {
		const query = {_id: new ObjectId(id)};
		const deletedOrder: DeleteResult | undefined =
			await collections.order?.deleteOne(query);

		if (deletedOrder?.deletedCount === 0) {
			throw new Error('could not find the order');
		}
	} catch (error: any) {
		throw new Error(`Unable to delete order, due to ${error.message}`);
	}
}
