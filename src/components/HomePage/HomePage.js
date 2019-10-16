import React from "react";
import RouterLink from "../reusable/RouterLink";
import HelperAvatar from "../reusable/HelperAvatar";
import "./homepage.scss";
import autseraImg from "../../assets/img/Autsera.png";
import backgroundHome from "../../assets/img/Background_Home.svg";

const HomePage = ({ history, setCompleted ,completed}) => {
  return (
    <div
      className="background-home"
      style={{ backgroundImage: `url(${backgroundHome})` }}
    >
      {/* <RouterLink className="btn-help" to="/help" label="?" /> */}
      <div className="container-home">
        <img className="img-logo" src={autseraImg} alt="Autsera Logo" />
        {completed.length?<RouterLink className="btn-start" to="/map" label="Continue Playing" />:null}
        
        <button  className="btn-newstart" onClick={() => {
          setCompleted([]);
          history.push("/map");
        }} >New Game</button>
      </div>
      <HelperAvatar
        speechText={
          <RouterLink
            to="/help"
            label="Hi, welcome to Autsera. Click here if you need help"
          />
        }
        timeOut={3600000}
      />
    </div>
  );
};

export default HomePage;
