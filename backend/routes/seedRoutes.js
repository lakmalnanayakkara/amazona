import express from 'express';
import Product from '../models/productModel';
import data from '../data';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const cretateProducts = await Product.insertMany(data.products);
  res.send({ cretateProducts });
});
export default seedRouter;
