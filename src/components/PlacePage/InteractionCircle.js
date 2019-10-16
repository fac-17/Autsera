import React from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";

const InteractionCircle = ({
  interaction,
  isCompleted,
  isUnlocked,
  setspeechText,
  completed
}) => {
  let interactionStyle = {
    position: "absolute",
    top: interaction.coordinates[0] + "%",
    right: interaction.coordinates[1] + "%"
  };

  let imageStyle = {
    width: interaction.width
  };
  const changeMessageIfLocked = () => {
    if (!isUnlocked)
      setspeechText(
        `This Interaction is locked, but you only need 
        ${interaction.requiredStars -
          completed.length} more stars to unlock it!`
      );
  };

  let icon = interaction.image + ".svg";

  return (
    <div
      style={interactionStyle}
      className={
        "interaction-circle " +
        (isCompleted ? "completed" : "not-completed") +
        " " +
        (isUnlocked ? "unlocked" : "locked")
      }
      onClick={changeMessageIfLocked}
    >
      {isCompleted ? <Stars has={1} max={1} /> : null}
      {!isUnlocked ? (
        <img
          style={{ position: "absolute", opacity: 0.7 }}
          src="/SVG/question.svg"
        />
      ) : null}
      <RouterLink
        imageWidth={interaction.width}
        title={interaction.text}
        label={interaction.text}
        icon={icon}
        to={"/interaction/" + interaction.id}
      />
    </div>
  );
};

export default InteractionCircle;
