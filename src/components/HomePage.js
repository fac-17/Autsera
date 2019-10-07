import React from "react";
import StartButton from "./StartButton";
import RouterLink from "./RouterLink";

const HomePage = ({startFunction}) => {

  return (

    <>
      <h1>Homepage</h1>
      <StartButton whenClicked={startFunction}/>
      <RouterLink to="/help" label="Help" />
    </>

  )

}

export default HomePage
