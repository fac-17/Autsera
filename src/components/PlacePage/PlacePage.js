import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import InteractionCircle from "./InteractionCircle";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import HelperAvatar from "../reusable/HelperAvatar";
import "./placepage.scss";

const PlacePage = ({ id, completed }) => {
  const placeData = data.places.find((place) => place.id === id);

  const style = {
    backgroundImage: `url(/img/${placeData.image})`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const [speechText, setspeechText] = useState("");
  const { has, max } = countStarsInPlace(id, completed);
  useEffect(() => {
    let newMessage =
      has === 0
        ? `Welcome to ${placeData.text}, there are ${max} stars to collect here`
        : `Keep going, you're doing great!`;
    setspeechText(newMessage);
  }, [completed]);

  return (
    <div style={style}>
      <div className="hud">
        <RouterLink className="btn-back" to="/map" label="Go Back" />
        <span className="signpost">{placeData.text}</span>
        <span className="signpost stars-container">
          <Stars {...countStarsInPlace(id, completed)} />
        </span>
      </div>

      {placeData.interactions.map((interaction) => (
        <InteractionCircle
          key={interaction.id}
          isUnlocked={completed.length >= interaction.requiredStars}
          interaction={interaction}
          isCompleted={completed.includes(interaction.id)}
          setspeechText={setspeechText}
          completed={completed}
        />
      ))}
      <HelperAvatar speechText={speechText} timeOut={5000} />
    </div>
  );
};

export default PlacePage;
