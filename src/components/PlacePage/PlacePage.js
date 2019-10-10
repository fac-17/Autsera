import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import InteractionCircle from "./InteractionCircle";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./placepage.scss";

const PlacePage = ({ id, completed }) => {
  const placeData = data.places.find(place => place.id === id);
  const { has } = countStarsInPlace(id, completed);

  const style = {
    backgroundImage: `url(/img/${placeData.image})`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <div style={style}>
      <RouterLink className="btn-back" to="/map" label="Go Back" />
      <div className="hud">
        <span className="signpost">Playground</span>
      </div>
      {/* Sample Stars Component */}
      <Stars {...countStarsInPlace(id, completed)} />

      {placeData.interactions.map(interaction => (
        <InteractionCircle
          key={interaction.id}
          isUnlocked={has >= interaction.requiredStars}
          interaction={interaction}
          isCompleted={completed.includes(interaction.id)}
        />
      ))}
    </div>
  );
};

export default PlacePage;
