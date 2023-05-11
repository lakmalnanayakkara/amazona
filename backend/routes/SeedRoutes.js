import express from 'express';
import Product from '../models/productModel';
import data from '../data';

const SeedRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProduct = await Product.insertMany(data.products);
  res.send({ createdProduct });
});

export default SeedRouter;
