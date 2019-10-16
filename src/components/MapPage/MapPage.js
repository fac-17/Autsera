import React, { useState, useEffect } from "react";
import RouterLink from "../reusable/RouterLink";
import "./map.scss";
import data from "../../data/data";
import findNextLevel from "../../utils/findNextLevel";
import PlaceCircle from "./PlaceCircle";
import HelperAvatar from "../reusable/HelperAvatar";
import findTotalStars from "../../utils/findTotalStars";
import mapImg from "../../assets/img/map.png";
const MapPage = ({ completed }) => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    let next = findNextLevel(completed);
    let newMessage = "";
    if (completed.length === 0) {
      newMessage = "Welcome to Autsera Land";
    } else if (next.requiredStars) {
      newMessage = `You're doing great, you only need ${next.requiredStars - completed.length} more stars to unlock the ${next.text}`;
    } else if (completed.length >= findTotalStars()) {
      newMessage = "Congratulations, you have completed the game!";
    } else {
      newMessage = "Congratulations, you have unlocked every level in the game!";
    }
    setMessage(newMessage);
  }, [completed]);

  return (
    <div
      className="map-background"
      style={{
        backgroundImage: `url(${mapImg})`,
      }}
    >
      <div className="hud">
        <RouterLink className="btn-back" to="/" label="Go Back" />
        <span className="signpost">AUTSERA LAND</span>
      </div>

      {data.places.map(place => (
        <PlaceCircle
          key={place.id}
          place={place}
          completed={completed}
          setMessage={setMessage}
        />
      ))}

      <HelperAvatar speechText={message} timeOut={100000} />
    </div>
  );
};

export default MapPage;
