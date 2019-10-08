import React from "react";
import RouterLink from "../reusable/RouterLink";

const IntaractionCircle = ({ interaction, isCompleted }) => (
  <div className={isCompleted ? "completed" : "not-completed"}>
    <RouterLink
      label={interaction.text}
      to={"/interaction/" + interaction.id}
    />
  </div>
);

export default IntaractionCircle;
