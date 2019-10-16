import React from "react";
import RouterLink from "../reusable/RouterLink";
import HelperAvatar from "../reusable/HelperAvatar";
import "./FourOFour.scss"

const FourOFour = () => {
  return (
    <div className="fourofour">
      <h1>You've lost your way!</h1>
      <HelperAvatar
        speechText={<RouterLink to="/" label="Click Here to go back Home" />}
        timeOut={3600000}
      />
    </div>
  );
};
export default FourOFour;
