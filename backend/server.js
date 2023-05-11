import express from 'express';
import data from './data.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to the database.');
  })
  .catch((err) => {
    console.log(err.messsage);
  });

const app = express();

app.get('/api/products', function (req, res) {
  res.send(data.products);
});

app.get('/api/products/slug/:slug', function (req, res) {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products/:id', function (req, res) {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log(`server at http://localhost:${port}`);
});
