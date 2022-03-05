import logo from './logo.svg';
import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import SignupButton from './components/parts/SignupButton';
import LoginButton from './components/parts/LoginButton';
import Login from './components/Login';
import Signup from './components/Signup;'
import './tailwind.config';


function App() {
  return (

    <div className="App">
      <Routes>
        <LoginButton>
          {/* <Route>
            pathname: 

          </Route> */}
        </LoginButton>
        <SignupButton />
      </Routes>
   
       </div>
  );
}

export default App;
