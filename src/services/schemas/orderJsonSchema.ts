import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config();

export async function applySchemaValidation(db: mongoDB.Db): Promise<void> {
	const jsonSchema = {
		$jsonSchema: {
			bsonType: 'object',
			required: ['name', 'email', 'phone', 'quantity'],
			additionalProperties: false,
			properties: {
				_id: {},
				name: {
					bsonType: 'string',
					description: "'name' is required and is a string",
				},
				email: {
					bsonType: 'string',
					description: "'email' is required and is a string",
				},
				phone: {
					bsonType: 'int',
					description: "'phone' is required and is a number",
				},

				quantity: {
					bsonType: 'int',
					description: "'quantity' is required and is a number",
				},
			},
		},
	};

	// Try applying the modification to the collection, if the collection doesn't exist, create it
	await db
		.command({
			collMod: `${process.env.ORDER_COLLECTION_NAME}`,
			validator: jsonSchema,
		})
		.catch(async (error: mongoDB.MongoServerError) => {
			if (error.codeName === 'NamespaceNotFound') {
				await db.createCollection(`${process.env.ORDER_COLLECTION_NAME}`, {
					validator: jsonSchema,
				});
			}
		});
}
