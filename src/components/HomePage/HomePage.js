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
      <RouterLink to="/help" label="Help" />
      <RouterLink to="/map" label="Start Playing" />
      <HelperAvatar speechText="Hi, welcome to Autsera" />
    </>
  );
};

export default HomePage;
