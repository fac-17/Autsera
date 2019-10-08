import React, { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HelpPage from "./HelpPage/HelpPage";
import MapPage from "./MapPage/MapPage";
import PlacePage from "./PlacePage/PlacePage";
import InteractionPage from "./InteractionPage/InteractionPage";

function App() {
  const [completed, setCompleted] = useState([1, 8, 13]);

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/help" component={HelpPage} />
        <Route
          path="/map"
          render={() => (
            <MapPage completed={completed} setCompleted={setCompleted} />
          )}
        />
        <Route
          path="/place/:id"
          render={({ match }) => (
            <PlacePage
              id={match.params.id}
              completed={completed}
              setCompleted={setCompleted}
            />
          )}
        />
        <Route
          path="/interaction/:id"
          render={({ match }) => <InteractionPage id={match.params.id} />}
        />
      </Router>
    </div>
  );
}

export default App;
