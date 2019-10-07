import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.css";

const MapPage = props => {
  return (
    <div className="map-background">
      <h2>This is the MAP page</h2>
      <RouterLink to="/" label="Go Back" />
    </div>
  );
};

export default MapPage;
