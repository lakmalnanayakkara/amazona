import mongoose, { Mongoose } from 'mongoose';

const prodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required },
    brand: { type: String, required },
    category: { type: String, required },
    description: { type: String, required },
    price: { type: Number, required },
    countInStock: { type: Number, required },
    rating: { type: Number, required },
    numReviews: { type: Number, required },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', prodSchema);

export default Product;
