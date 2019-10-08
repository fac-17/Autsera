import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.css";
import data from "../../data/data";

const MapPage = props => {

  return (
    <div className="map-background">
      <h2>AUTSERA LAND</h2>
      <RouterLink to="/" label="Go Back" />
      {data.places.map(place => <RouterLink key={place.id} to={`/place/${place.id}`} label={place.text} />)}
    </div>
  );
};

export default MapPage;
