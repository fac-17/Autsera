import data from "../data/data";

const findTotalStars = () => {
  return data.places.reduce((totalStars, place) => {
    return totalStars + place.interactions.length;
  }, 0);
};

export default findTotalStars;
