import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';

import authRoutes from './src/routes/auth';
import apiRoutes from './src/routes/api';
import userRoutes from './src/routes/user';
import paymentRoutes from './src/routes/payment';
import apiMiddleware from './src/middleware/apiAuth';
import adminMiddleware from './src/middleware/adminAuth';
import errorHandler from './src/middleware/errorHandler';

dotenv.config();
require('./src/config/sequelize');

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);
app.use('/payments', paymentRoutes);
app.use('/users', userRoutes);
app.use('/api', apiRoutes);
app.use(errorHandler);

module.exports = app;
