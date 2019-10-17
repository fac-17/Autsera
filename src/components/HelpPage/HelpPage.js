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
      setPlay(false);
    } else {
      videoEl.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="background-help" style={{backgroundImage:`url(${background})`}}>
      <br />

      <RouterLink className="btn-back" to="/" label="Go Back" />
      <div className="video-container">
        <video ref={videoEl} className="video-player" autoPlay >
          <source src="/AutseraHelpFinal.mp4" type="video/mp4" />
        </video>
        <button
          onClick={togglePlay}
          className={`btn-play ${play ? 'play' : 'pause'}`} >
          {play ? "Pause" : "Play"}
        </button>
      </div>

    </div>
  );
};

export default HelpPage;

// <video ref={videoEl} className="video-player" controls controlsList="nofullscreen nodownload" muted loop autoplay >
