// import React from 'react'
import ace from "../assets/images/ace.png";
import optimize from "../assets/images/optimed.png";
import brent from "../assets/images/superLogo.png";

function SuperMat() {
  return (
    <div className="superMat">
      <div className="superHeader">
        <h1>Supermarket We Supply</h1>
    </div> 
    <div className="superDetails">
         <div className="superLogo">
            <img src={ace} alt="" />
         </div>
         <div className="superLogo">
            <img src={optimize} alt="" />
         </div>
         <div className="superLogo">
            <img src={brent} alt="" />
         </div>
    </div>
    </div>
    
  )
}

export default SuperMat