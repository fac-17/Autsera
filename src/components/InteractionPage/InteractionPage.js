import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
// import data from "../../data/data";
import * as dataUtils from "../../utils/dataUtils";
const InteractionPage = ({ id, setCompleted }) => {
  const [selectedAnswers,setSelectedAnswers]=useState([]);
  // let interactionObj = data.places.reduce((interactionObj, currentPlace) => {
  //   let foundInteraction = currentPlace.interactions.find(
  //     interaction => interaction.id === Number(id)
  //     );
  //     return foundInteraction ? foundInteraction : interactionObj;
  //   }, {});

    let interactionObj=dataUtils.getById(Number(id));
    let placeObj=dataUtils.getParent(interactionObj)
    
    // let placeObj = data.places.find(place => place.interactions.includes(interactionObj));
   
    useEffect(()=>{
      const correctAnswersIds=interactionObj.answers
        .filter(answer=>answer.correct)
        .map(answer=>answer.id)
      
        // all answers are correctly guessed
      if (correctAnswersIds.every(correctId=>selectedAnswers.includes(correctId))){
        setCompleted(completed=>completed.includes(id)?completed:completed.concat(id))
      }
    },[selectedAnswers])
  return (
    <div
      className="interaction-background"
      style={{ backgroundImage: `url(/img/${interactionObj.image})` }}
    > 
      <h2>{interactionObj.text}</h2>
      <ul>
        {interactionObj.answers.map(answer => (
          <li key={answer.id}> <button onClick={()=>{
            if (answer.correct && !selectedAnswers.includes(answer.id)) {
             
              setSelectedAnswers([...selectedAnswers,answer.id])
             
            } else {
              
            }
            console.log(answer.response)
          }}>{answer.text} {selectedAnswers.includes(answer.id)?" + ":""}</button></li>
        ))}
      </ul>
      <RouterLink to={"/place/" + placeObj.id} label="Go Back" />
    </div>
  );
};

export default InteractionPage;

// {data.places.map(interaction => <Something key={interaction.id} label={place.text} />)}
