import React from "react";
import StartButton from "../reusable/StartButton";
import RouterLink from "../reusable/RouterLink";
import HelperAvatar from "../reusable/HelperAvatar";
import "./homepage.scss";

const HomePage = ({ history, setCompleted, completed }) => {
  return (
    <>
      <div className="background-home">
        {/* <RouterLink className="btn-help" to="/help" label="?" /> */}
        <div className="container-home">
          <img className="img-logo" src="./img/Autsera.png" alt="Autsera Logo" />
          {completed.length ? <RouterLink className="btn-start" to="/map" label="Continue Playing" /> : null}

          <button
            className="btn-newstart"
            onClick={() => {
              setCompleted([]);
              history.push("/map");
            }}
          >
            New Game
          </button>
        </div>
      </div>
      <HelperAvatar
        speechText={<RouterLink to="/help" label="Hi, welcome to Autsera. Click here if you need help" />}
        timeOut={3600000}
      />
    </>
  );
};

export default HomePage;
