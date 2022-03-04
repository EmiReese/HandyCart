const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 1
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
