import React from "react";
import RouterLink from "../reusable/RouterLink";

const IntaractionCircle = ({ interaction }) => (
  <div>
    <RouterLink
      label={interaction.text}
      to={"/interaction/" + interaction.id}
    />
  </div>
);

export default IntaractionCircle;
