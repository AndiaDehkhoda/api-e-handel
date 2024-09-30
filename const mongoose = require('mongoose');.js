const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  imageUrl: String
});

module.exports = mongoose.model('Product', productSchema);
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  totalPrice: Number,
  orderDate: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
const faker = require('faker');

const products = [];
for (let i = 0; i < 50; i++) {
  products.push({
    name: faker.commerce.productName(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    stock: faker.datatype.number(),
    category: faker.commerce.department(),
    imageUrl: faker.image.imageUrl()
  });
}

