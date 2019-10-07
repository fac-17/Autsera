import React from "react";
import logo from "../logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import HelpPage from "./HelpPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/help" component={HelpPage} />
      </Router>
    </div>
  );
}

export default App;
