import express from 'express';

import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import {errorHandler} from './middleware/error.middleware';
import {notFoundHandler} from './middleware/not-found.middleware';
import {connectToMongoDatabase} from './services/db/mongo-database.service';

dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(errorHandler);
app.use(notFoundHandler);

connectToMongoDatabase().catch((error) => {
	console.error('Database connection failed', error);
	process.exit(0);
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
