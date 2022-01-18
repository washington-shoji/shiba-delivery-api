import {ObjectId} from 'mongodb';

export interface IOrder {
	id?: ObjectId;
	name: string;
	phone: number;
	quantity: number;
}
