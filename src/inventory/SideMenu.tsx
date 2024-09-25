import React from 'react'

interface Props {
    navBar: boolean;
    handleToggle: () => void;
  }

  
  const SideMenu: React.FC<Props> = ({ navBar, handleToggle }) =>
    {
  return (
    <div className={navBar ? "sideNavActive" : "sideNav"}>
 <div className="harmburger" onClick={handleToggle}>
  *
    <i className="fa-solid fa-bars-staggered"></i>
 </div>

<div className="sideNavLogoContainer">
<a href="{{ route('index') }}">
 <div className="sideNavLogo">
    {/* <img src="{{ asset('images/johntopLogo.png') }}" alt=""> */}
 </div>
</a>
 <p>JohnTop Foods</p>
</div>

 <div className="sideNavMenu">
    <ul>
        <li className="active">
          <a href="{{ route('index') }}">
          <i className="fa-solid fa-house"></i> 
          <span>Dashboard</span>
          </a>
        </li>

        <li>
          <a href="{{ route('products.index') }}">
          <i className="fa-solid fa-tag"></i>
           <span>my application</span>
           </a>
          </li>

        <li>
          <a href="{{ route('suppliers.index') }}">
            <i className="fa-solid fa-cart-shopping"></i>
            <span>supplier</span>
            </a>
        </li>

        <li>
          <a href="{{ route('blogs.index') }}">
            <i className="fa-solid fa-bullhorn"></i>
            <span>blog</span>
          </a>
        </li>

    </ul>
 </div>
</div>
  )
}

export default SideMenu