import data from "../data/data";

// object with keys as object Ids mapping to actual object {8: {id:8,text:"Leonie fighting",...}}
export const dataObjects = {};

// object with keys as object Ids and value parent Id { 8:0 } 
export const parentsId = {};

data.places.forEach(place => {
  dataObjects[place.id] = place;
  place.interactions.forEach(interaction => {
    parentsId[interaction.id] = place.id;
    dataObjects[interaction.id] = interaction;
    interaction.hints.forEach(hint => {
      dataObjects[hint.id] = hint;
      parentsId[hint.id] = interaction.id;
    });
    interaction.answers.forEach(answer => {
      dataObjects[answer.id] = answer;
      parentsId[answer.id] = interaction.id
    });
  });
});

// given id returns and object with the scenario
export const getById = id => dataObjects[id];

// given child object get parent's id
export const getParentId = child => parentsId[child.id]

// given child object get parent's object
export const getParent = child => getById(parentsId[child.id])


// const testI=getById(8);
// const testParentId=getParentId(testI);
// const testParent=getParent(testI);

// console.log(testI,testParentId,testParent)