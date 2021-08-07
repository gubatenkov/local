import express from 'express';
import dotenv from 'dotenv';
import bootcamps from './routes/bootcampRoutes.js';
import morgan from 'morgan';
import connectDB from './db.config.js';

// load environment vars config
dotenv.config();

// connect to Mongo DB
connectDB();

// set constants
const PORT = process.env.PORT || 5000;
const app = express();

// logging middleware in dev mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(
  PORT,
  console.log(`server:${PORT} running is in ${process.env.NODE_ENV}...`)
);

server.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`);
  server.close(() => process.exit(1));
});
