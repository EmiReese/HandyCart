import React from "react";
import GroceryList from "./components/GroceryList";
import SignupButton from './components/parts/SignupButton';
import LoginButton from './components/parts/LoginButton';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from "./pages/UserProfile";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql
} from "@apollo/client";

import { setContext } from '@apollo/client/link/context';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {
  return (
  <div className="text-3xl underline ">
  <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grocerylist" element={<GroceryList />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<LoginButton/>} />
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/signup" element={<SignupButton /> } />
        <Route path="/userprofile" element= {< UserProfile/> } />
      </Routes>
    </Router>
  </ApolloProvider>
  </div> 
  );
}

