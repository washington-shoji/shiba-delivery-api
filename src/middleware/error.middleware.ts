import {Request, Response, NextFunction} from 'express';
import HttpException from '../common/exceptions/http-exceptions.exceptions';

export const errorHandler = (
	error: HttpException,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	const status: number = error.statusCode || error.status || 500;

	response.status(status).send(error);
};
