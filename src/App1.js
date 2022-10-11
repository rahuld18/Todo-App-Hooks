import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState(1);

  useEffect(() => {
    console.log("inside useEffect");
  });

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
        {state}
        <button onClick={() => setState(state + 1)}>Increase by 1</button>
        <button onClick={() => setState(state - 1)}>Decrease by 1</button>
      </header>
    </div>
  );
}

export default App;
