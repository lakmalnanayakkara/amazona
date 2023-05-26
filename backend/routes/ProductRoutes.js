import express from 'express';
import Products from '../modules/ProdModule.js';
import expressAsyncHandler from 'express-async-handler';

const ProductRouter = express.Router();

ProductRouter.get('/', async (req, res) => {
  const product = await Products.find();
  res.send(product);
});

ProductRouter.get(
  '/categories',
  expressAsyncHandler(async (req, res) => {
    const categories = await Products.find().distinct('category');
    res.send(categories);
  })
);

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
