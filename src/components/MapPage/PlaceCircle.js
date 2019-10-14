import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
import "./PlaceCircle.scss";
const PlaceCircle = ({ place, completed }) => {
  const [icon, setIcon] = useState("");
  useEffect(() => {
    console.log("place icon", place.icon);
    import(`../../assets${place.icon}`).then(file => {
      setIcon(file.default);
    });
  });
  return (
    <div
      className={
        "place-circle " +
        (completed.length >= place.requiredStars ? "unlocked" : "locked")
      }
    >
      <RouterLink
        title={place.text}
        icon={icon}
        label={place.text}
        to={"/place/" + place.id}
      ></RouterLink>
      <Stars {...countStarsInPlace(place.id, completed)} />
    </div>
  );
};

export default PlaceCircle;
