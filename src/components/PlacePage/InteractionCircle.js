import React from "react";
import RouterLink from "../reusable/RouterLink";

const IntaractionCircle = ({ interaction, isCompleted, isUnlocked }) => (
  <div
    className={
      (isCompleted ? "completed" : "not-completed") +
      " " +
      (isUnlocked ? "unlocked" : "locked")
    }
  >
    <RouterLink
      title={interaction.text}
      label={interaction.text}
      to={"/interaction/" + interaction.id}
    />
  </div>
);

export default IntaractionCircle;
