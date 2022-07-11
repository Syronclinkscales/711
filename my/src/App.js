import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import* as React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a<Button variant="contained">Contained</Button>
        <Button variant="contained" disabled>
        Disabled
       </Button>
       <Button variant="contained" href="#contained-buttons">
       Link
        </Button>
          className="App-link"
          href="https://"https://soundcloud.com/user-892283635/zoom-lil-uzi-vert"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         </a>

         </header>
         </div>
  );
}

export default App;
