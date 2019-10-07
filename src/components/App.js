import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HelpPage from "./HelpPage/HelpPage";
import MapPage from "./MapPage/MapPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/map" component={MapPage} />
      </Router>
    </div>
  );
}

export default App;
