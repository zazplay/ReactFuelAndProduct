import React from 'react';
import logo from './randphoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} id="dogImg" alt="logo" />
        <p>
          <code>Чак</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Моя собачка
        </a>
      </header>
    </div>
  );
}

export default App;
