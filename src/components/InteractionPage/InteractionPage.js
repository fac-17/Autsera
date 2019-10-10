import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";
import "./interactionpage.scss";

const InteractionPage = ({ id, setCompleted }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  let interactionObj = data.places.reduce((interactionObj, currentPlace) => {
    let foundInteraction = currentPlace.interactions.find(
      interaction => interaction.id === id
    );
    return foundInteraction ? foundInteraction : interactionObj;
  }, {});

  let placeObj = data.places.find(place =>
    place.interactions.includes(interactionObj)
  );

  useEffect(() => {
    const correctAnswersIds = interactionObj.answers
      .filter(answer => answer.correct)
      .map(answer => answer.id);

    // all answers are correctly guessed
    if (
      correctAnswersIds.every(correctId => selectedAnswers.includes(correctId))
    ) {
      setCompleted(completed =>
        completed.includes(id) ? completed : completed.concat(id)
      );
    }
  }, [selectedAnswers]);

  const style = {
    backgroundImage: `url(/SVG/${placeObj.text}.svg)`,
    minHeight: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

  return (
    <div className="interaction-background" style={style}>
      <RouterLink
        className="btn-back"
        to={"/place/" + placeObj.id}
        label="Go Back"
      />
      <div className="hud">
        <span className="signpost">{interactionObj.text}</span>
      </div>
      <img src="/img/Interaction.png" className="interaction-image" />
      <ul>
        {interactionObj.answers.map(answer => (
          <li key={answer.id}>
            <button
              className={
                selectedAnswers.includes(answer.id)
                  ? "btn-answer selected"
                  : "btn-answer option"
              }
              onClick={() => {
                if (answer.correct && !selectedAnswers.includes(answer.id)) {
                  setSelectedAnswers([...selectedAnswers, answer.id]);
                } else {
                }
                console.log(answer.response);
              }}
            >
              {answer.text}
              {selectedAnswers.includes(answer.id) ? " + " : ""}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractionPage;

// {data.places.map(interaction => <Something key={interaction.id} label={place.text} />)}
