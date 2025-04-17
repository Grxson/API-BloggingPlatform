import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


app.use(errorHandler)


export default app;