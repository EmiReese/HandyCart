
import gql from 'graphql';


const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $username: String!
    $password: String!
  ) {
    login(username: $username, password: $password) 
  }
`;

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

  const NEW_ITEM = gql`
  mutation newItem($itemName: itemInput! $itemPrice: priceInput! $itemQuantity: quantityInput!){
    addItem(itemName: $itemName, itemPrice: $itemPrice, itemQuantity: $itemQuantity) {
    list_id
    newItems{
      item_id
    }
    }
  }
  `

