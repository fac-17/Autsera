import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./helppage.scss";
import HelperAvatar from "../reusable/HelperAvatar";

const HelpPage = props => {
  return (
    <div className="background-help">
      <br />
      <RouterLink className="btn-back" to="/" label="Go Back" />
      <div className="video-container">
        <video className="video-player" controls controlsList="nofullscreen nodownload" muted loop autoplay >
          <source src="/AutseraHelpFinal.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default HelpPage;
