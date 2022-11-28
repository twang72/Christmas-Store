import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

dotenv.config(); //fetch variables in .env file.
//connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter); //when user enter /api/seed, the seedRouter will response to it.
app.use('/api/products', productRouter);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
