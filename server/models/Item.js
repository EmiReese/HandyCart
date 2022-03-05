const mongoose = require('mongoose');

const { Schema } = mongoose;

const itemSchema = new Schema(
  {
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
    purchased: {
      type: Boolean,
      required: true
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// virtual that returns the username of the person who added the item
itemSchema.virtual('creator', {
  ref: 'User',
  localField: 'creator',
  foreignField: 'username',
  justOne: true
});

module.exports = itemSchema;
