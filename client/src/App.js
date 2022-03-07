
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
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
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";



export default function App() {
  return (
    <div className="text-3xl underline">
  <ApolloProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
          <Route path="/signup" element= {<Signup />}/>
          </Routes>
    </Router>
</ApolloProvider>
    </div>
  );
}


