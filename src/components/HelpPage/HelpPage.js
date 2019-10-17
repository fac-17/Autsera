import React from "react";
import RouterLink from "../reusable/RouterLink";
import "./helppage.scss";
import HelperAvatar from "../reusable/HelperAvatar";
import background from "../../assets/img/interactions_backgrounds/Town.svg";
const HelpPage = () => {
  return (
    <div className="background-help" style={{backgroundImage:`url(${background})`}}>
      <br />

      <RouterLink className="btn-back" to="/" label="Go Back" />
      <HelperAvatar speechText="Hi, welcome to Autsera" timeOut={1000} />
    </div>
  );
};

export default HelpPage;
