const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    
  }
  type List {

  }
  type Auth {

  }
  type Query {
    userProfile: User
    lists(_id: ID!): List
  }
  type Mutation {
    signUp(): Auth
    newList(): List
    addUserToList(): List
    login(): Auth
    changePurchaseStatus(): List
    addItem(): List
    deleteItem(): List
    changeQuantity(): List
    changePrice(): List
    resetList(): List
    changeBudget(): List
    deleteList(): List
    logout(): Auth
  }
`;

module.exports = typeDefs;