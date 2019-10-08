import React from "react";
// returns an array of max Boolean elements like [true,true,true,false,false] for has=3, max=5
const starsArray=(has,max)=>Array(max).fill(0).map( (_,i) => i<has)

const Star = ( {full} ) => (
  <svg viewBox="0 0 51 48" fill={full?"#000":"none"} stroke="#000" width="20px">
      <title>{full?"Full Star":"Empty Star"}</title>
    <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
  </svg>
);

const Stars = ({ has, max}) => <div className="stars">
    {starsArray(Number(has),Number(max)).map( (full,i)=><Star key={i} full={full} />)}
</div>;

export default Stars;
