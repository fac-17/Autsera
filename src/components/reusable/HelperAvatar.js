import React from "react";
import "./HelperAvatar.scss";
const HelperAvatar = ({ speechText, timeOut }) => {
  return (
    <div class="helper-avatar-container">
      <div class="helper-avatar"></div>
      <div class="speech-box">{speechText}</div>
    </div>
  );
};

export default HelperAvatar;
