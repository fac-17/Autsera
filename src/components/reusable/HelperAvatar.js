import React from "react";
import "./HelperAvatar.scss";

const HelperAvatar = ({ speechText, helpText, timeOut }) => {
  //   console.log({ hintText });
  let [displaySomething, setdisplaySomething] = React.useState(true);
  let [showHint, setshowHint] = React.useState(false);
  let [clickCount, setclickCount] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setdisplaySomething(false);
    }, timeOut);
    return () => clearTimeout(timer);
  }, [setdisplaySomething, showHint, clickCount]);

  let toggleshowHint = e => {
    setdisplaySomething(true);
    setshowHint(true);
    setclickCount(clickCount => clickCount + 1);
  };

  return (
    <div className="helper-avatar-container">
      <img
        src="./SVG/Hippo.svg"
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
