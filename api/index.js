import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoutes from './routes/user.route.js';
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });


app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
  });
 //test connection 
 app.use('/api/user', userRoutes);
