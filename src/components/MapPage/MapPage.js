import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.css";
import data from "../../data/data";
import PlaceCircle from "./PlaceCircle";
const MapPage = ({ completed }) => {
  return (
    <div className="map-background">
      <h2>AUTSERA LAND</h2>
      <RouterLink to="/" label="Go Back" />
      {data.places.map(place => (
        <PlaceCircle key={place.id} place={place} completed={completed} />
      ))}
    </div>
  );
};

export default MapPage;
