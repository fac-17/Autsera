import React from "react";
import "./HelperAvatar.scss";
const HelperAvatar = ({ speechText, timeOut }) => {
  return (
    <div className="helper-avatar-container">
      <img className="helper-avatar" alt="helper-avatar"></img>
      {speechText ? <div className="speech-box">{speechText}</div> : null}
    </div>
  );
};

export default HelperAvatar;
