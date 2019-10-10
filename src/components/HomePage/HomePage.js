import React from "react";
import StartButton from "../reusable/StartButton";
import RouterLink from "../reusable/RouterLink";
import HelperAvatar from "../reusable/HelperAvatar";

const HomePage = ({ startFunction }) => {
  return (
    <>
      <h1>Homepage</h1>

      <img src="./img/Autsera.jpg" alt="Autsera Logo" />
      <StartButton whenClicked={startFunction} />
      <RouterLink to="/map" label="Start Playing" />
      <HelperAvatar speechText={<RouterLink to="/help" label="Hi, welcome to Autsera. Click here if you need help" />} timeOut={3600000} />
    </>
  );
};

export default HomePage;
