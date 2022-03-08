import { gql } from '@apollo/client';

export const QUERY_USERPROFILE = gql`
  {
    userProfile {
      _id
      username
      lists {
        _id
        name
      }
    }
  }
`;