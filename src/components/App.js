import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HelpPage from "./HelpPage/HelpPage";
import MapPage from "./MapPage/MapPage";
import PlacePage from "./PlacePage/PlacePage";
import InteractionPage from "./InteractionPage/InteractionPage";
import FourOFour from "./FourOFour/FourOFour";
function App() {
  const [completed, setCompleted] = useState(
    JSON.parse(localStorage.getItem("completed")) || []
  );

  useEffect(() => {
    try {
      localStorage.setItem("completed", JSON.stringify(completed));
    } catch (error) {
      console.error(error);
    }
  }, [completed]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => (
              <HomePage history={history} setCompleted={setCompleted} completed={completed}/>
            )}
          />
          <Route exact path="/help" component={HelpPage} />
          <Route
            exact
            path="/map"
            render={() => (
              <MapPage completed={completed} setCompleted={setCompleted} />
            )}
          />
          <Route
            path="/place/:id"
            render={({ match }) => (
              <PlacePage
                id={Number(match.params.id)}
                completed={completed}
                setCompleted={setCompleted}
              />
            )}
          />
          <Route
            path="/interaction/:id"
            render={({ match }) => (
              <InteractionPage
                id={Number(match.params.id)}
                setCompleted={setCompleted}
              />
            )}
          />
          <Route path="*" component={FourOFour} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
