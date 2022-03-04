
const mongoose = require('mongoose');

const { Schema } = mongoose;
const User = require('./User');
const Item = require('./Item');



const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
    users: [User.schema],
    users: [Item.schema],


});

const List = mongoose.model('List', listSchema);

module.exports = List;