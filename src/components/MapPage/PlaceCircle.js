import React from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./PlaceCircle.scss";

const PlaceCircle = ({ place, completed }) => {
  let positionStyle = {
    position: "absolute",
    top: place.coordinates[0] + "%",
    right: place.coordinates[1] + "%"
  };

  return (
    <div
      style={positionStyle}
      className={
        "place-circle " +
        (completed.length >= place.requiredStars ? "unlocked" : "locked")
      }
    >
      {completed.length < place.requiredStars ? <img style={{position:"absolute", opacity:0.7}} src="/SVG/question.svg" /> : null}
      <RouterLink
        title={place.text}
        icon={place.icon}
        label={place.text}
        to={"/place/" + place.id}
      ></RouterLink>
      <Stars {...countStarsInPlace(place.id, completed)} />
    </div>
  );
};

export default PlaceCircle;
