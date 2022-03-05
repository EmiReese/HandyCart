
import React from 'react';

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup'
import SignupButton from './components/parts/SignupButton';
import LoginButton from './components/parts/LoginButton';
import './tailwind.config';




function App() {
  return (
    
      <div className="App">
          <LoginButton />
          <SignupButton />
       </div>

  );
}

export default App;
