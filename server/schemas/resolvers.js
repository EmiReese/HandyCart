const { User, List, Item } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    userProfile: async (parent, args, context) => {
      if(context.user) {
        const userData = await User.findById(context.user._id).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Please log in');
    },
    lists: async (parent, { _id }) => {
      return await List.findById(_id).populate('users');
    }
  },
  Mutation: {
    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    newList: async (parent, { name, budget }, context) => {
      const list = await List.create({ name, budget }, context.user._id);

      return list;
    },
    addUserToList: async (parent, { _id, username }) => {
      const getId = await User.findOne({ username });

      const newUser = await List.findOneAndUpdate(_id, 
        { $push: { users: getId } },
        { new: true }
      );

      return newUser;
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    changePurchaseStatus: async (parents, { _id }) => {
       return await Item.findByIdAndUpdate(_id, { purchased: !purchased }, { new: true });
    }, 
    addItem: async (parents, { _id, itemData }) => {
      const newItem = new Item({ itemData });
      
      return await List.findByIdAndUpdate(_id, { $push: { items: newItem } }, { new: true });
    }, 
    deleteItem: async (parents, { _id }) => {
      return await Item.findByIdAndDelete(_id);
    },
    changeQuantity: async (parents, { _id, quantity }) => {
      return await Item.findByIdAndUpdate(_id, { $set: { quantity: quantity } }, { new: true });
    },
    changePrice: async (parents, { _id, price }) => {
      return await Item.findByIdAndUpdate(_id, { $set: { price: price } }, { new: true });
    },
    resetList: async (parents, { _id }) => {
      return await Item.findByIdAndUpdate(_id, { $set: { purchased: false } }, { new: true });
    },
    changeBudget: async (parents, { _id, budget }) => {
      return await List.findByIdAndUpdate(_id, { $set: { budget: budget } }, { new: true });
    },
    deleteList: async (parents, { _id }) => {
      return await List.findByIdAndDelete(_id);
    },
  }
};

module.exports = resolvers;