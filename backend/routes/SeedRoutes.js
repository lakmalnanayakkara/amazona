import express from 'express';
import Product from '../modules/ProdModule';
import data from '../data';

const SeedRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});

export default SeedRouter;
