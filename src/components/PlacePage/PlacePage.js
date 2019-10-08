import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import InteractionCircle from "./InteractionCircle";
import Stars from "../reusable/Stars";
import {countStarsInPlace} from "../../utils/starsCounting";

const PlacePage = ({ id, completed }) => {
  const placeData = data.places.find(place => place.id === Number(id));
  const stars = countStarsInPlace(id, completed);

  return (
    <div style={{ backgroundImage: `url(/img/${placeData.image})` }}>
      <h2>{placeData.text}</h2>
      <RouterLink to="/map" label="Go Back" />
      {/* Sample Stars Component */}
      <Stars has={stars.has} max={stars.max} />
      {placeData.interactions.map(interaction => (
        <InteractionCircle key={interaction.id} interaction={interaction} />
      ))}
    </div>
  );
};

export default PlacePage;
