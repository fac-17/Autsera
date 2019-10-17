import React, { useState, useEffect, useRef } from "react";
import RouterLink from "../reusable/RouterLink";
import "./helppage.scss";
import HelperAvatar from "../reusable/HelperAvatar";

const HelpPage = props => {
  const [play, setPlay] = useState(true);
  const videoEl = useRef();

  const togglePlay = () => {
    if (play) {
      videoEl.current.pause();
      videoEl.current.innerHtml = "Play";
      setPlay(false);
    } else {
      videoEl.current.play();
      videoEl.current.innerHtml = "Pause";
      setPlay(true);
    }
  };

  return (
    <div className="background-help">
      <br />
      <RouterLink className="btn-back" to="/" label="Go Back" />
      <div className="video-container">
        <video ref={videoEl} className="video-player" autoPlay >
          <source src="/AutseraHelpFinal.mp4" type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          className="play-button" >
          {play ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
};

export default HelpPage;

// <video ref={videoEl} className="video-player" controls controlsList="nofullscreen nodownload" muted loop autoplay >
