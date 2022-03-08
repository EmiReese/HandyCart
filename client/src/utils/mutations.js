
import gql from 'graphql';

//notes: importing in gqu; specify mutation function; in the () we are passing a variable in.  $denotes<-- variable after : it is a datatype;  then, referring to specific mutation from typedefs{};  then in index.js (or wherever it goes), import in usemutation hook. 

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $username: String!
    $password: String!
  ) {
    signup(
      username: $username
      password: $password
    )
  }
`;


const NEW_LIST = gql`
mutation newList(
$newName: String!
 $budget: Float!
 $users: [ID]
 ) {
    newList(
      name: $newName
      budget: $budget
      users: $users
      )
  }`

  const ADD_USER = gql`
  mutation AddUserMutation(
    $_id: ID!
    $username: String!
  ) {
    addUserToList(username: $username) 
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $username: String!
    $password: String!
  ) {
    login(username: $username, password: $password) 
  }
`;
//I think we need to add the boolean somewhere in this one
// const CHANGEPURCHASESTATUS_MUTATION = gql`
//   mutation ChangePurchaseStatusMutation(
//     $_id: ID!
//   ) {
//     changePurchaseStatus() 
//   }
// `;

const ADD_ITEM = gql`
  mutation newItem($itemName: itemInput! $itemPrice: priceInput! $itemQuantity: quantityInput!){
    addItem(itemName: $itemName, itemPrice: $itemPrice, itemQuantity: $itemQuantity) {
    list_id
    newItems{
      item_id
    }
    }
  }
  `
 
const DELETE_ITEM = gql`
  mutation deleteItem($_id: ID!){
    deleteItem(_id: $id)
  }
  `
const CHANGE_QUANTITY = gql`
  mutation changeQuantity($_id: ID!, $quantity: Int!){
    changeQuantity(_id: $id, quantity: $quantity)
  }
  `
const CHANGE_PRICE = gql`
  mutation changePrice($_id: ID!, $price: Float!){
    changePrice(_id: $id, price: $price)
  }
  `
  //again, I think there needs to be more to this
const RESET_LIST = gql`
  mutation resetList($_id: ID!){
    resetList(_id: $id)
  }
  `
const CHANGE_BUDGET = gql`
  mutation changeBudget($_id: ID!, $budget: Float!){
    changeBudget(_id: $id, budget: $budget)
  }
  `
  const DELETE_LIST = gql`
  mutation deleteList($_id: ID!){
    deleteList(_id: $id)
  }
  `