import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authroutes from './routes/authentication.route.js';
import userRoutes from './routes/user.route.js';

const app = express();

dotenv.config();

// JSON bodies
app.use(express.json());

// URL-encoded bodies


// Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use('/api/user', userRoutes); // User routes
app.use('/api/auth', authroutes); // Authentication routes

//server statinng

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});