import React from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./PlaceCircle.scss";
const PlaceCircle = ({ place, completed }) => {
  return (
    <div
      className={
        "place-circle " +
        (completed.length >= place.requiredStars ? "unlocked" : "locked")
      }
    >
      <RouterLink
        icon={place.icon}
        label={place.text}
        to={"/place/" + place.id}
      ></RouterLink>
      <Stars {...countStarsInPlace(place.id, completed)} />
    </div>
  );
};

export default PlaceCircle;
