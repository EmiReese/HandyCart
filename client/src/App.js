import logo from './logo.svg';
import './App.css';
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
