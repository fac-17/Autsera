import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ to, label, className, icon }) => {
  return (
    <div className="router-link">
      <Link className={className} to={to}>
        <p>{label}</p>
        {icon ? <img src={icon} alt="icon" className="icon-image" /> : null}
      </Link>
    </div>
  );
};

export default RouterLink;
