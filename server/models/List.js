const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');
const itemSchema = require('./Item');

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  users: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  items: [itemSchema]
});

const List = mongoose.model('List', listSchema);

module.exports = List;