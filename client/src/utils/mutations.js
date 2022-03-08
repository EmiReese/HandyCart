
import gql from 'graphql';

//notes: importing in gqu; specify mutation function; in the () we are passing a variable in.  $denotes<-- variable after : it is a datatype;  then, referring to specific mutation from typedefs{};  then in index.js (or wherever it goes), import in usemutation hook. 

export const SIGNUP_MUTATION = gql`
  mutation signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const NEW_LIST = gql`
  mutation newList($name: String!, $budget: Float) {
    newList(name: $name, budget: $budget) {
      _id
      name
      budget
    }
  }
`;

export const ADD_USER = gql`
  mutation addUserToList($id: ID!, $username: String!) {
    addUserToList(_id: $id, username: $username) {
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

export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
        lists {
          _id
          name
        }
      }
    }
  }
`;

export const CHANGE_STATUS = gql`
  mutation changePurchaseStatus($id: ID!) {
    changePurchaseStatus(_id: $id) {
      _id
      name
      price
      quantity
      purchased
    }
  }
`;

export const ADD_ITEM = gql`
  mutation addItem($id: ID!, $itemData: ItemInput!) {
    addItem(_id: $id, itemData: $itemData) {
      _id
      name
      budget
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
 
export const ADD_LIST = gql`
  mutation addListToUser($id: ID!, $username: String!) {
    addListToUser(_id: $id, username: $username) {
      _id
      username
      lists {
        _id
        name
      }
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation deleteItem($id: ID!) {
    deleteItem(_id: $id) {
      _id
      name
      price
      quantity
      purchased
    }
  }
`;

export const CHANGE_QUANTITY = gql`
  mutation changeQuantity($id: ID!, $quantity: Int!) {
    changeQuantity(_id: $id, quantity: $quantity) {
      _id
      name
      price
      quantity
      purchased
    }
  }
`;

export const CHANGE_PRICE = gql`
  mutation changePrice($id: ID!, $price: Float!) {
    changePrice(_id: $id, price: $price) {
      _id
      name
      price
      quantity
      purchased
    }
  }
`;

//again, I think there needs to be more to this
export const RESET_LIST = gql`
  mutation resetList($id: ID!) {
    resetList(_id: $id) {
      _id
      name
      price
      quantity
      purchased
    }
  }
`;

export const CHANGE_BUDGET = gql`
  mutation changeBudget($id: ID!, $budget: Float!) {
    changeBudget(_id: $id, budget: $budget) {
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

export const DELETE_LIST = gql`
  mutation deleteList($id: ID!) {
    deleteList(_id: $id) {
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
