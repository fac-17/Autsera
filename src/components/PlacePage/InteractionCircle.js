import React from "react";
import RouterLink from "../reusable/RouterLink";
import data from "../../data/data";

const IntaractionCircle = ({interaction})=> (<div>
    <RouterLink label={interaction.text} to={"/interaction/"+interaction.id}/>
</div>)

export default IntaractionCircle