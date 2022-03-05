const { User, List } = require('../models');

//responsible for populating data defined by our typedefs
const resolvers = {
  Query: {
    userProfile: async () => {
      return await User.findOne({}).populate
      ('lists').populate({
      path: 'lists',
      populate: 'items'
      }); 
    },
    lists: async () => {

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

    }
  }
};

module.exports = resolvers;