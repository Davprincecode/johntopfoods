import { useState } from 'react'
import logo from "../assets/images/logo-2.png"
import { NavLink } from 'react-router-dom';


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
    
<NavLink to="/">
<div className="logocontainer">
    <img src={logo} alt="" />
</div>
</NavLink>

<div className="itemscontainer">
    <ul className={navOpen ? "openNavBar" : "closeNavBar"}>
        <li> <NavLink to="/"> Home </NavLink> </li>

        <li><NavLink to="/about-us">about us</NavLink></li>
        <li><NavLink to="/product-list">product</NavLink></li>
        <li><a href="#contactcontainer">contact us</a> </li>
        
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
