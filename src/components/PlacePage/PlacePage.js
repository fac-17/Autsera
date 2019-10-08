import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import Stars from "../reusable/Stars";

const PlacePage = ({ id }) => {
  const placeData = data.places.find(place => place.id === Number(id));
  // console.log(placeData);
  return (
    <div style={{ backgroundImage: `url(/img/${placeData.image})` }}>
      <h2>{placeData.text}</h2>
      <RouterLink to="/map" label="Go Back" />
      <Stars has="3" max="5" />
    </div>
  );
};

export default PlacePage;
