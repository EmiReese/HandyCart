const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    budget: {
      type: Number,
      required: true,
      default: 50
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ]
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