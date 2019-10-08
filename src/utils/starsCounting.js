import data from "../data/data";

// expects completed to be an array of completed interactions [1,24] and returns {has:1,max:2} object
export const countStarsInPlace = (placeId, completed) => {
  const placeData = data.places.find(place => place.id === Number(placeId));
  const max = placeData.interactions.length;
  const has = placeData.interactions.filter(interaction =>
    completed.includes(interaction.id)
  ).length;
  return { has, max };
};
