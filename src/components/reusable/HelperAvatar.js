import React from "react";
import "./HelperAvatar.scss";

const HelperAvatar = ({ speechText, helpText, timeOut }) => {
  let [displaySomething, setdisplaySomething] = React.useState(true);
  let [showHint, setshowHint] = React.useState(false);
  let [clickCount, setclickCount] = React.useState(0);
  console.log({ helpText },{speechText},{displaySomething});
  React.useEffect(() => {
    setdisplaySomething(true)
    const timer = setTimeout(() => {
      setdisplaySomething(false);
    }, timeOut);
    return () => clearTimeout(timer);
  }, [setdisplaySomething, showHint, clickCount,speechText]);

  let toggleshowHint = e => {
    setdisplaySomething(true);
    setshowHint(true);
    setclickCount(clickCount => clickCount + 1);
  };

  return (
    <div className="helper-avatar-container">
      <img
        className="helper-avatar"
        alt="helper-avatar"
        onClick={toggleshowHint}
      ></img>
      {displaySomething && speechText && !showHint ? (
        <div className="speech-box">{speechText}</div>
      ) : null}
      {displaySomething && helpText && showHint ? (
        <div className="speech-box">{helpText}</div>
      ) : null}
    </div>
  );
};

export default HelperAvatar;
