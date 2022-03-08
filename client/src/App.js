import React from "react";
import "./App.css";
import GroceryList from "./components/GroceryList";
import SignupButton from './components/parts/SignupButton';
import LoginButton from './components/parts/LoginButton';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserProfile from "./pages/UserProfile";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

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
        <Route path="/grocerylist" element={<GroceryList />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/login" element={<LoginButton/>} />
          <Route path="/signup" element= {<Signup/>}/>
          <Route path="/signup" element={<SignupButton /> } />
          <Route path="userprofile" element= {< UserProfile/> } />
          
         

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

