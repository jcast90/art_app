import React, { useState, useEffect } from 'react';
import ArtPieces from './views/ArtPieces';
import Login from './views/Login';
import { startSession } from './components/startSession';
import './App.css';


const App: React.FC = () => {
  const [loggedIn, updateLogin] = useState(false);

  const handleLogin = () => {
    // do some authentication stuff
    updateLogin(!loggedIn)
  }

  useEffect(() => {
    startSession();
  })

  return (
    <div className="App">
      <header>
        <button onClick={handleLogin}>{loggedIn ? 'Log out' : 'Log in'}</button>
      </header>
      {
        loggedIn
          ? <Login />
          : <ArtPieces />
      }
    </div>
  );
}

export default App;


