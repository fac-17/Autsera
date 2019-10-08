import React, {useState} from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HelpPage from "./HelpPage/HelpPage";
import MapPage from "./MapPage/MapPage";
import PlacePage from "./PlacePage/PlacePage";


function App() {

  const [completed, setCompleted] = useState([]);


  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/map" component={MapPage} />
        <Route
          path="/place/:id"
          render={({ match }) => <PlacePage id={match.params.id} completed={completed} setCompleted={setCompleted} />}
        />
      </Router>
    </div>
  );
}

export default App;
