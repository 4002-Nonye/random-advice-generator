import React from "react";

const Attribution =({hrefMentor,hrefOwn})=>{
    return(
  <div className="attribution">
    challenge by <a href={hrefMentor} target='_blank'>Frontend Mentor</a> coded by <a href={hrefOwn}>Nonye</a>
    </div>)
}

export default Attribution;