const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number,
    },
  ],
  totalPrice: Number,
  address: String,
  status: { type: String, default: "Processing" },
});

module.exports = mongoose.model('Order', orderSchema);
