const { User, List } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { populate } = require('../models/List');

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

    },
    newList: async (parent, args) => {
      
    },
    addUserToList: async (parent, args) => {
      
    },
    login: async (parent, args) => {
      
    },
    changePurchaseStatus: async (parents, args) => {

    }, 
    addItem: async (parents, args) => {

    }, 
    deleteItem: async (parents, args) => {

    },
    changeQuantity: async (parents, args) => {

    },
    changePrice: async (parents, args) => {

    },
    resetList: async (parents, args) => {

    },
    changeBudget: async (parents, args) => {

    },
    deleteList: async (parents, args) => {

    },
    logout: async (parents, args, context) => {

    }
  }
};

module.exports = resolvers;