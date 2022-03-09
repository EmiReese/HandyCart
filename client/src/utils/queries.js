import { gql } from '@apollo/client';

export const QUERY_USERPROFILE = gql`
  query userProfile {
    userProfile {
      _id
      username
      lists {
        _id
        name
        budget
      }
    }
  }
`;

export const QUERY_LISTS = gql`
  query lists($id: ID!) {
    lists(_id: $id) {
      _id
      name
      budget
      users {
        _id
        username
      }
      items {
        _id
        name
        price
        quantity
        purchased
      }
    }
  }
`;