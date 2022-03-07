import React from "react";
import List from "./pages/List";

import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import Remaining from "./components/Remaining";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import SignupButton from './components/parts/SignupButton';
import LoginButton from './components/parts/LoginButton';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';

import {
  ApolloClient,
  ApolloProvider,
  gql
} from "@apollo/client";



export default function App() {
  return (
    <div className="text-3xl underline ">
  <ApolloProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element= {<Signup/>}/>
          </Routes>
    </Router>
</ApolloProvider>

<div className="h-max bg-yellow-200">

      <List />
      <div className="ml-20 columns-3 flex justify-around">
        <Budget />
        <ExpenseTotal />
        <Remaining />
      </div>

    </div>

    </div>
  );
}


