import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HelpPage from "./HelpPage/HelpPage";
import MapPage from "./MapPage/MapPage";
import PlacePage from "./PlacePage/PlacePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/map" component={MapPage} />
        <Route
          path="/place/:id"
          render={({ match }) => <PlacePage id={match.params.id} />}
        />
      </Router>
    </div>
  );
}

export default App;
