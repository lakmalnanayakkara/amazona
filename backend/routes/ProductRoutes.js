import express from 'express';
import Product from '../models/ProductModel';

const ProductRouter = express.Router();

SeedRouter.get('/', async (req, res) => {
  const roducts = await Product.find();
  res.send(products);
});

export default ProductRouter;
