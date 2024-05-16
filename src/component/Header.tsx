import React, { useState } from 'react'
import logo from "../assets/images/johntopLogo.png";

function Header() {
const [navOpen, setNavOpen] = useState(false);

const navFunction = () =>{
    setNavOpen(!navOpen)
}
  return (
    <div>
      {/* <!-- ========nav section============== --> */}
      <div className={navOpen ? "sideNavOverall sideNavOverallChange":"sideNavOverall"} onClick={navFunction}>
</div>
<div className="navcontainer">
    
<a href="index.html">
<div className="logocontainer">
    <img src={logo} alt="" />
</div>
</a>

<div className="itemscontainer">
    <ul className={navOpen ? "openNavBar" : "closeNavBar"}>
        <li><a href="index.html">Home</a> </li>
        <li><a href="about.html">about us</a></li>
        <li><a href="product.html">product</a></li>
        <li><a href="contact.html">contact us</a> </li>
        
        {/* <!-- <li><a href="">about</a></li> --> */}
    </ul>
</div>

<div className="bar" onClick={navFunction}>
    <div className="div" style={{borderTop: "2px solid white", width: "15px"}}></div>
    <div className="div" style={{borderTop: "2px solid white", width: "10px", marginTop: "2px"}}></div>
    <div className="div" style={{borderTop: "2px solid white", width: "15px", marginTop: "2px"}}></div>
</div>

</div>
{/* <!-- ===============Nav end================ --> */}
    </div>
  )
}

export default Header
