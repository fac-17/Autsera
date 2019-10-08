import React from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";
import { countStarsInPlace } from "../../utils/starsCounting";
const PlaceCircle = ({ place, completed }) => (
  <div>
    <RouterLink label={place.text} to={"/place/" + place.id}></RouterLink>
    <Stars {...countStarsInPlace(place.id, completed)} />
  </div>
);

export default PlaceCircle;
