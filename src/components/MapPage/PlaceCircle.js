import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./PlaceCircle.scss";
import place1 from "../../assets/img/places_icons/Playground_icon.svg";
import place2 from "../../assets/img/places_icons/School_icon.svg";
import place3 from "../../assets/img/places_icons/Airport_icon.svg";
import question from "../../assets/img/question.svg";
const icons = {
  "/img/places_icons/Playground_icon.svg": place1,
  "/img/places_icons/School_icon.svg": place2,
  "/img/places_icons/Airport_icon.svg":place3

};
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
        icon={icons[place.icon]}
        label={place.text}
        to={isUnlocked ? "/place/" + place.id : "#"}
      ></RouterLink>
      <Stars {...countStarsInPlace(place.id, completed)} />
    </div>
  );
};

export default PlaceCircle;
