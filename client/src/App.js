import React from "react";
import List from "./pages/List";



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
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<LoginButton/>} />
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/signup" element={<SignupButton />} />

          
          </Routes>

    </Router>
</ApolloProvider>
</div> 
  );
}


