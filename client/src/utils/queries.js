import { gql } from '@apollo/client';

//note if needed: change users to user?
export const QUERY_USERPROFILE = gql`
    query getUserProfile {
    users {
      _id
    username
    }
  }
`;

export const QUERY_LISTS = gql`
    query getUserLists {
    users {
      _id
      name
      budget
    }
  }
`;

export const QUERY_ITEMS = gql`
    query getListItems {
    items {
      _id
      name
      price
      quantity
      purchased
    }
  }
`;

//are the below needed?  Reference typeDefs


// export const QUERY_AUTH = gql`
//     query getAuth {
//     auths {
//       _id
//       token
//       user
//     }
//   }
// `;

// export const QUERY_ITEM_INPUT = gql`
//     query getItemInput {
//     items {
//       _id
//       name
//       price
//       quantity
//       purchased
//     }
//   }
// `;

