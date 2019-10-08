import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";

const PlaceCircle = ({ place }) => (
  <div>
    <RouterLink label={place.text} to={"/place/" + place.id}></RouterLink>
  </div>
);

export default PlaceCircle;
