import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.css";

const MapPage = props => {
  return (
    <div className="map-background">
      <h2>AUTSERA LAND</h2>
      <RouterLink to="/" label="Go Back" />
      <RouterLink to="/place/0" label="Playground" />
    </div>
  );
};

export default MapPage;
