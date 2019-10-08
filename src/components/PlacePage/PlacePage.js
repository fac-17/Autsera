import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import InteractionCircle from "./InteractionCircle";
const PlacePage = ({ id }) => {
  const placeData = data.places.find(place => place.id === Number(id));
  // console.log(placeData.interactions);
  return (
    <div style={{ backgroundImage: `url(/img/${placeData.image})` }}>
      <h2>{placeData.text}</h2>
      <RouterLink to="/map" label="Go Back" />
      {placeData.interactions.map(interaction => (
        <InteractionCircle key={interaction.id} interaction={interaction} />
      ))}
    </div>
  );
};

export default PlacePage;
