import React from "react";
import "./HelperAvatar.scss";
const HelperAvatar = ({ speechText, helpText, timeOut }) => {
  //   console.log({ hintText });
  let [showHint, setshowHint] = React.useState(false);
  let toggleshowHint = e => {
    setshowHint(!showHint);
    console.log(e);
  };
  return (
    <div className="helper-avatar-container">
      <img
        className="helper-avatar"
        alt="helper-avatar"
        onClick={toggleshowHint}
      ></img>
      {speechText && !showHint ? (
        <div className="speech-box">{speechText}</div>
      ) : null}
      {helpText && showHint ? (
        <div className="speech-box">{helpText}</div>
      ) : null}
    </div>
  );
};

export default HelperAvatar;
