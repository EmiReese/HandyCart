const { gql } = require('apollo-server-express');

//typedefs are used to define our schema, and the types of data the schema will contain.

const typeDefs = gql`
  type User { 
    _id: ID
    userName: String
    password: String
    lists: [List]
 }
  type List { 
    _id: ID
    name: String
    users: String
    items: [Item]
 }
 type Item { 
  _id: ID
  name: String

} 
 type Query {
  userProfile: [User]
  lists: [List]
  items: [Item]
}

`;

module.exports = typeDefs;



//-------------


// type Mutation {
//   # Define which queries the front end is allowed to make and what data is returned
//   type Query {
//     items: [Item]
//   }
// }