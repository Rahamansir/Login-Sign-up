import { useState } from 'react';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  const [forregister, toggole] = useState(true);

  const change = function () {
    toggole(function (preValue) {
      return !preValue;
    });
  };

  return (
    <>
      {forregister ? <Register /> : <Login />}
      <button onClick={change}>
        Go To {forregister ? 'Register' : 'Login'}
      </button>
    </>
  );
}

export default App;
