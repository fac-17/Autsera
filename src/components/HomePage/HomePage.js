import React from "react";
import StartButton from "../reusable/StartButton";
import RouterLink from "../reusable/RouterLink";
import HelperAvatar from "../reusable/HelperAvatar";
import "./homepage.scss";

const HomePage = ({ startFunction }) => {
  return (
    <div className="background-home">
      <RouterLink className="btn-help" to="/help" label="?" />
      <div className="container-home">
        <img className="img-logo" src="./img/Autsera.png" alt="Autsera Logo" />
        <RouterLink className="btn-start" to="/map" label="Start Playing" />
      </div>

       <HelperAvatar speechText={<RouterLink to="/help" label="Hi, welcome to Autsera. Click here if you need help" />} timeOut={3600000} />
    </div>
  );
};

export default HomePage;
