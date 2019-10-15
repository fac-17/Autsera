import React from "react";
import RouterLink from "../reusable/RouterLink";

const IntaractionCircle = ({ interaction, isCompleted, isUnlocked }) => {
  let interactionStyle = {
    position: "absolute",
    top: interaction.coordinates[0] + "%",
    right: interaction.coordinates[1] + "%"
  };

  return (
    <div
      style={interactionStyle}
      className={"interaction-circle " +
        (isCompleted ? "completed" : "not-completed") +
        " " +
        (isUnlocked ? "unlocked" : "locked")
      }
    >
       {!isUnlocked ? <img style={{position:"absolute", opacity:0.7, top:"-50%"}} src="/SVG/question.svg" /> : null}
      <RouterLink
        title={interaction.text}
        label={interaction.text}
        to={"/interaction/" + interaction.id}
      />
    </div>
  );

}

export default IntaractionCircle;
