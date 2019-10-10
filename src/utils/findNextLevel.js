import data from "../data/data";

// expects completed to be an array of completed interactions [1,24] and returns {has:1,max:2} object
const findNextLevel = (completed) => {
  let nextLevel = {};

  let placesArray = data.places.slice().sort((a, b) => {
    return a.requiredStars - b.requiredStars
  });

  for (let i = 0; i < placesArray.length; i++) {
    if (placesArray[i].requiredStars > completed.length) {
      nextLevel = placesArray[i];
      break;
    }
  }

  return nextLevel
};

export default findNextLevel;
