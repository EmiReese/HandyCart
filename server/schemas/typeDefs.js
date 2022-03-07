const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    lists: [List]
  }
  type List {
    _id: ID
    name: String
    budget: Float
    users: [User]
    items: [Item]
  }
  type Item {
    _id: ID
    name: String
    price: Float
    quantity: Int
    purchased: Boolean
  }
  type Auth {
    token: ID
    user: User
  }
  input ItemInput {
    name: String!
    price: Float!
    quantity: Int
    purchased: Boolean
  }
  type Query {
    userProfile: User
    lists(_id: ID!): List
  }
  type Mutation {
    signup(username: String!, password: String!): Auth
    newList(name: String!, budget: Float, users: [ID]): List
    addUserToList(_id: ID!, username: String!): List
    login(username: String!, password: String!): Auth
    changePurchaseStatus(_id: ID!): Item
    addItem(_id: ID!, itemData: ItemInput!): List
    deleteItem(_id: ID!): Item
    changeQuantity(_id: ID!, quantity: Int!): Item
    changePrice(_id: ID!, price: Float!): Item
    resetList(_id: ID!): List
    changeBudget(_id: ID!, budget: Float!): List
    deleteList(_id: ID!): List
  }
`;

module.exports = typeDefs;