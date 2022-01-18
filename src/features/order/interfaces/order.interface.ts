import {ObjectId} from 'mongodb';

export interface IOrderToClient {
	name: string;
	phone: number;
	quantity: number;
}

export interface IOrderToService extends IOrderToClient {
	id?: ObjectId;
	acknowledged?: boolean;
	matchedCount?: number;
	modifiedCount: number;
	upsertedCount?: number;
	errorInfo?(): [number, string];
}
