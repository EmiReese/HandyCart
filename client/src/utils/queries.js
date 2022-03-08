import { gql } from '@apollo/client';

//notes: refer to activity 13 (video 2/25at about 13:25)  -   in 'home.js': import in usequery hook -  import { useQuery } from '@apollo/client';  then import the query declared here - import { QUERY_THOUGHTS } from '../utils/queries';
//then, to use the query - 
// const Home = () => {
//   // Execute the query on component load
//   const { loading, data } = useQuery(QUERY_THOUGHTS);

//   // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
//   const thoughts = data?.thoughts || [];  (!!see additional information on the activity for the inline use of the query!!)


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

