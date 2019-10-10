import React from "react";
import RouterLink from "../reusable/RouterLink";

const HelpPage = props => {
  return (
    <>
      <h2>This is the HEEELP! page</h2>
      <RouterLink className="btn-back" to="/" label="< Go Back" />
    </>
  );
};

export default HelpPage;
