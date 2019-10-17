import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./PlaceCircle.scss";

import question from "../../assets/img/question.svg";
import assets from "../../assets";

const PlaceCircle = ({ place, completed, setMessage }) => {
  const [isUnlocked, setIsUnlocked] = React.useState(false);
  let positionStyle = {
    position: "absolute",
    top: place.coordinates[0] + "%",
    right: place.coordinates[1] + "%"
  };
  useEffect(() => {
    setIsUnlocked(completed.length >= place.requiredStars);
  }, [completed, place]);

  const changeMessageIfLocked = () => {
    if (!isUnlocked)
      setMessage(
        `This Place is locked, but you only need ${place.requiredStars -
          completed.length} more stars to unlock it!`
      );
  };
  return (
    <div
      style={positionStyle}
      className={"place-circle " + (isUnlocked ? "unlocked" : "locked")}
      onClick={changeMessageIfLocked}
    >
      {!isUnlocked ? (
        <img
          alt="locked-question-mark"
          style={{ position: "absolute", opacity: 0.7 }}
          src={question}
        />
      ) : null}
      <RouterLink
        imageWidth={place.width}
        title={place.text}
        icon={assets[place.icon]}
        label={place.text}
        to={isUnlocked ? "/place/" + place.id : "#"}
      ></RouterLink>
      <Stars {...countStarsInPlace(place.id, completed)} />
    </div>
  );
};

export default PlaceCircle;
