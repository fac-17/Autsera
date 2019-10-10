import data from "../data/data";

// expects completed to be an array of completed interactions [1,24] and returns {has:1,max:2} object
const nextLevel = (completed) => {
  const currentStars = completed.length;
  let nextLevel = {};

  let requiredStarsArray = data.places.map(place => {
    return {requiredStars: place.requiredStars, text: place.text}
  })

  requiredStarsArray = requiredStarsArray.sort((a, b) => {
    return a.requiredStars - b.requiredStars
  });

  for (let i = 0; i < requiredStarsArray.length; i++) {
    if (requiredStarsArray[i].requiredStars > currentStars) {
      nextLevel = requiredStarsArray[i];
      break;
    }
  }

  return nextLevel
};

export default nextLevel;
