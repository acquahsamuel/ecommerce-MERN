import express from 'express';
import dotenv from 'dotenv';
import color from 'colors';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config({ path : '.env' });
connectDB();

const app = express();


app.get('/', (req, res) => {
  res.send('API is runing');
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(pro => pro._id === req.params.id);
  res.status(200).json(product);
});

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is runing on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline.bold
  )
);

 