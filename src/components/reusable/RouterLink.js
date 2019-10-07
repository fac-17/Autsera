import React from "react";
import { Link } from "react-router-dom";

const RouterLink = ({ to, label }) => {

  return (
    <div className="router-link">
      <Link to={to}>{label}</Link>
    </div>
  )

}

export default RouterLink;
