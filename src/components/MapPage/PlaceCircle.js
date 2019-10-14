import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./PlaceCircle.scss";
import p1 from "../../assets/SVG/Playground_icon.svg"
const icons={"/SVG/Playground_icon.svg":p1}
const PlaceCircle = ({ place, completed }) => {
 
 
  return (
    <div
      className={
        "place-circle " +
        (completed.length >= place.requiredStars ? "unlocked" : "locked")
      }
    >
      <RouterLink
        title={place.text}
        icon={icons[place.icon]}
        label={place.text}
        to={"/place/" + place.id}
      ></RouterLink>
      <Stars {...countStarsInPlace(place.id, completed)} />
    </div>
  );
};

export default PlaceCircle;
