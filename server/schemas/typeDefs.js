const { gql } = require('apollo-server-express');

//typedefs are used to define our schema, and the types of data the schema will contain.

const typeDefs = gql`
  type User { 
    # Define which fields are accessible from the User model
    _id: ID
    userName: String
    password: String
    lists: [List]
 }
  type List { 
    # Define which fields are accessible from the List model
    _id: ID
    name: String
    users: String
    items: [[Item.name, Item.price, Item.quantity, Item.purchased]]
 }
 
 type Query {
  users: [User]
  lists: [List]
}

 type Mutation {
  type Query {
    users: [User]
  }
}

  type Mutation {
    type Query {
      lists: [Item.name, Item.price, Item.quantity, Item.purchased]
    }
  }
`;

module.exports = typeDefs;


//-------------

// type Item { 
//   # Define which fields are accessible from the Item schema?
//   _id: ID
//   name: String
//   price: Number
//   quantity: Number
// }
// type Mutation {
//   # Define which queries the front end is allowed to make and what data is returned
//   type Query {
//     items: [Item]
//   }
// }