const { User, List } = require('../models');

const resolvers = {
  Query: {
    userProfile: async () => {

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