import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ to, label, className }) => {
  return (
    <div className="router-link">
      <Link className={className} to={to}>
        {label}
      </Link>
    </div>
  );
};

export default RouterLink;
