import React from "react";
import StartButton from "./StartButton"

const HomePage = ({startFunction}) => {

  return (

    <>
      <h1>Homepage</h1>
      <StartButton whenClicked={startFunction}/>
    </>

  )

}

export default HomePage
