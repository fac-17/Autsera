import React from "react";
import RouterLink from "../reusable/RouterLink";

const PlacePage = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <RouterLink to="/map" label="Go Back" />
    </div>
  );
};

export default PlacePage;
