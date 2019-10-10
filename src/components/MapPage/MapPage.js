import React, {useState, useEffect} from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.scss";
import data from "../../data/data";
import nextLevel from "../../utils/nextLevel"
import PlaceCircle from "./PlaceCircle";
import HelperAvatar from "../reusable/HelperAvatar"


const MapPage = ({ completed }) => {

  const [next, setNext] = useState({})
  useEffect(() => {
    setNext(nextLevel(completed));
  }, [completed])

  return (
    <div className="map-background">
      <h2>AUTSERA LAND</h2>
      <RouterLink to="/" label="Go Back" />
      {data.places.map(place => (
        <PlaceCircle key={place.id} place={place} completed={completed} />
      ))}

      <HelperAvatar
        speechText={"You're doing great, you only need " + (next.requiredStars-completed.length) + " more stars to unlock " + next.text}
        timeOut={100000}
        />
    </div>

  );
};

export default MapPage;
