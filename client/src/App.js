import React from "react";
import "./App.css";
import GroceryList from "./Components/GroceryList";


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import SignupButton from './Components/parts/SignupButton';
import LoginButton from './Components/parts/LoginButton';
import Home from './Pages/Home';

import Login from './Pages/Login';
import Signup from './Pages/Signup';

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
        <Route path="/list" element={<GroceryList />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<LoginButton/>} />
          <Route path="/signup" element= {<Signup/>}/>
         

          </Routes>

    </Router>
</ApolloProvider>
<div className="grocery-app">
      <GroceryList />
    </div>
  );

</div> 
  );
}

