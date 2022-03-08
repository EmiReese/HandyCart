import React from "react";
import List from "./pages/List";

import Budget from "./Components/Budget";
import ExpenseTotal from "./Components/ExpenseTotal";
import Remaining from "./Components/Remaining";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import SignupButton from './Components/parts/SignupButton';
import LoginButton from './Components/parts/LoginButton';
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
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<LoginButton/>} />
          <Route path="/signup" element= {<Signup/>}/>
         

          </Routes>

    </Router>
</ApolloProvider>
</div> 
  );
}


