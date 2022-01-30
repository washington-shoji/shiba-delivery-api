import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';
import {IOrderToClient} from './../../features/order/interfaces/order.interface';
import {applySchemaValidation} from '../schemas/orderJsonSchema';

dotenv.config();

const {MONGO_USER, MONGO_PASSWORD, MONGO_PATH, DB_NAME, ORDER_COLLECTION_NAME} =
	process.env;

export const collections: {order?: mongoDB.Collection<IOrderToClient>} = {};

export async function connectToMongoDatabase(): Promise<void> {
	try {
		const client: mongoDB.MongoClient = new mongoDB.MongoClient(
			`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
		);

		await client.connect();

		const db: mongoDB.Db = client.db(`${DB_NAME}`);

		await applySchemaValidation(db);

		const orderCollection: mongoDB.Collection<IOrderToClient> =
			db.collection<IOrderToClient>(`${ORDER_COLLECTION_NAME}`);

		// Persist the connection to the collections
		collections.order = orderCollection;

		console.log(`Successfully connected to MongoDatabase: ${db.databaseName}`);
	} catch (error: any) {
		console.log('Error connecting to MongoDatabase: ', error.message);
	}
}
