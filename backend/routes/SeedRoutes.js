import express from 'express';
import data from '../data.js';
import Products from '../modules/ProdModule.js';

const SeedRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  await Products.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});

export default SeedRouter;
