import React from 'react';
import SignupButton from '../components/parts/SignupButton';
import LoginButton from '../components/parts/LoginButton';
// import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
    <div>
         
  <SignupButton>
        <Link to="/signup">Signup</Link>
  </SignupButton>
 
  <LoginButton>
  <Link to="/login">Login</Link>
  </LoginButton>
    </div>
    );
    }
   