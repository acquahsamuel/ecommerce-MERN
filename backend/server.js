import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import color from 'colors';
import connectDB from './config/db.js';

dotenv.config({path: './config.env'});
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is runing');
});

//@desc importing Routes
import productRoutes from './routes/productRoutes.js';

//@desc mounting
app.use('/api/products', productRoutes);

app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

if (process.env.NODE_ENV === 'development') {
  morgan(function(tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens['response-time'](req, res),
      'ms',
    ].join(' ');
  });
}

app.use(morgan('combined'));

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server is runing on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
      .underline.bold
  )
);
