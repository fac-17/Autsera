import React from "react";
import logo from "../logo.svg";
import "./App.scss";
import StartButton from "./StartButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <span className="x">Jan</span>
          <StartButton
            whenClicked={() => {
              console.log("clicked");
            }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <p>
        <span className="x">Jan</span>
      </p>
    </div>
  );
}

export default App;
