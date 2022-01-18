import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

const {MONGO_USER, MONGO_PASSWORD, MONGO_PATH, DB_NAME} = process.env;

export async function connectToMongoDatabase(): Promise<void> {
	try {
		const client: mongoDB.MongoClient = new mongoDB.MongoClient(
			`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
		);

		const db: mongoDB.Db = client.db(`${DB_NAME}`);

		await client.connect();

		console.log(`Successfully connected to MongoDatabase: ${db.databaseName}`);
	} catch (error: any) {
		console.log('Error connecting to MongoDatabase: ', error.message);
	}
}
