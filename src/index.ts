import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middlewares/error.middleware';
import { notFoundHandler } from './middlewares/not-found.middleware';
import { coresRouter } from './routes/cores.router';

dotenv.config();

if (!process.env.PORT)
  process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);
const BASE_URL: string = '/api/v1';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(`${BASE_URL}/cores`, coresRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, (): void => {
  console.log(`Application listening on port ${PORT}`);
});