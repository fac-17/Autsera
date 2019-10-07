import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.css";

const MapPage = props => {
  return (
    <div className="map-background">
      <h2>AUTSERA LAND</h2>
      <RouterLink to="/" label="Go Back" />
      <RouterLink to="/place" label="Playground" />
    </div>
  );
};

export default MapPage;
