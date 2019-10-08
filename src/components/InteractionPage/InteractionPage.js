import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";



const InteractionPage = ({id}) => {

  return (
    <div className="interaction-background">
      <h2>INTERACTION PAGE</h2>
      <p>{object.text}</p>
      <RouterLink to="/" label="Go Back" />
    </div>
  );
};

export default InteractionPage;

// {data.places.map(interaction => <Something key={interaction.id} label={place.text} />)}
