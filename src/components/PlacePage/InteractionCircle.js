import React from "react";
import RouterLink from "../reusable/RouterLink";
import Stars from "../reusable/Stars";

import question from "../../assets/img/question.svg"

import icon1 from "../../assets/img/interactions/Slide_happy.svg";
import icon2 from "../../assets/img/interactions/Blackboard.svg";
import icon3 from "../../assets/img/interactions/Boys_ball.svg";
import icon4 from "../../assets/img/interactions/Bullying.svg";
import icon5 from "../../assets/img/interactions/Classroom.svg";
import icon6 from "../../assets/img/interactions/Slide.svg";
import icon7 from "../../assets/img/interactions/Fight_ball.svg";


const icons = {
  "/img/interactions/Slide_happy": icon1,
  "/img/interactions/Blackboard": icon2,
  "/img/interactions/Boys_ball": icon3,
  "/img/interactions/Bullying": icon4,
  "/img/interactions/Classroom": icon5,
 "/img/interactions/Slide": icon6,
 "/img/interactions/Fight_ball": icon7,

};
const InteractionCircle = ({
  interaction,
  isCompleted,
  isUnlocked,
  setspeechText,
  completed
}) => {
  let interactionStyle = {
    position: "absolute",
    top: interaction.coordinates[0] + "vh",
    right: interaction.coordinates[1] + "vw"
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

  let icon = icons[interaction.image];

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
          src={question}
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
