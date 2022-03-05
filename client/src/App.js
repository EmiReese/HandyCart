import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import './tailwind.config';

function App() {
  return (
    <div className="App">
        <Login />
      <Signup />
       </div>
  );
}

export default App;
