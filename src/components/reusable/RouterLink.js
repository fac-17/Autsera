import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ to, label, className, icon, title, imageWidth }) => {
  let imageStyle = {
    width: imageWidth
  };

  return (
    <div className="router-link">
      <Link className={className} to={to} title={title}>
        <p>{label}</p>
        {icon ? (
          <img
            style={imageStyle}
            src={icon}
            alt="icon"
            className="icon-image"
          />
        ) : null}
      </Link>
    </div>
  );
};

export default RouterLink;
