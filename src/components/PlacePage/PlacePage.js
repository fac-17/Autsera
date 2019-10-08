import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";

const PlacePage = ({ id }) => {

  const placeData = data.places.find(place => place.id === Number(id));

  return (
    <div style={{ backgroundImage: `url(/img/${placeData.image})` }}>
      <h2>{placeData.text}</h2>
      <RouterLink to="/map" label="Go Back" />
    </div>
  );
};

export default PlacePage;
