const mongoose = require('mongoose');

const { Schema } = mongoose;
const itemSchema = require('./Item');

const listSchema = new Schema(
  {
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

listSchema.virtual('listLength').get(function (){
  return this.items.length;
});

const List = mongoose.model('List', listSchema);

module.exports = List;