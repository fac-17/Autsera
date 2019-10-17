import React from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";

const InteractionCircle = ({ interaction, isCompleted, isUnlocked, setspeechText, localStarsAchieved }) => {
  let interactionStyle = {
    position: "absolute",
    top: interaction.coordinates[0] + "vh",
    right: interaction.coordinates[1] + "vw",
  };

  let imageStyle = {
    width: interaction.width,
  };
  const changeMessageIfLocked = () => {
    if (!isUnlocked)
      setspeechText(
        `This Interaction is locked, but you only need 
        ${interaction.requiredStars - localStarsAchieved} more stars to unlock it!`
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
        <img className="lock-icon" style={{ position: "absolute", opacity: 0.7 }} src="/img/lock.svg" />
      ) : null}
      <RouterLink
        imageWidth={interaction.width}
        title={interaction.text}
        label={interaction.text}
        icon={icon}
        to={isUnlocked ? "/interaction/" + interaction.id : "#"}
      />
    </div>
  );
};

export default InteractionCircle;
