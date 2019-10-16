import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./helppage.scss";
import HelperAvatar from "../reusable/HelperAvatar";

const HelpPage = props => {
  return (
    <div className="background-help">
      <br />
      <RouterLink className="btn-back" to="/" label="Go Back" />
      <div className="help-video">
        <video width="100%" height="auto" autoplay>
          <source src="/AutseraHelpFinal.mp4" type="video/mp4" />
        </video>
      </div>
      <HelperAvatar speechText="Hi, welcome to Autsera" timeOut={1000} />
    </div>
  );
};

export default HelpPage;
