import express from 'express';
import Products from '../modules/ProdModule.js';

const ProductRouter = express.Router();

ProductRouter.get('/', async (req, res) => {
  const products = await Products.find();
  res.send(products);
});

ProductRouter.get('/slug/:slug', async (req, res) => {
  const product = await Products.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

ProductRouter.get('/:id', async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});
export default ProductRouter;
