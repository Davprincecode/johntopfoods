import React from 'react'

interface Props {
    navBar: boolean;
    handleToggle: () => void;
  }

  interface MenuItem {
    title: string;
    path: string;
    icon?: JSX.Element;
    subNavOption?: {
      title: string;
      path: string;
    }[];
  }
  
  const menuItems: MenuItem[] = [
    {
        title : 'Home',
        path : '/Home',
        icon : <i className="bi bi-caret-down-fill"></i>,  
    },
    {
        title : 'my application',
        path : '/application',
        icon : <i className="bi bi-caret-down-fill"></i>,  
    },
    {
        title : 'profile',
        path : '/profile',
        icon : <i className="bi bi-caret-down-fill"></i>,
        subNavOption : [
        {
        title : 'personal details',
        path : 'profile/profile'
        },
        {
        title : 'profile page',
        path : 'profile/profilepage'
        },
        {
        title : 'change password',
        path : 'profile/change'
        }
        ]
        },

        {
        title : 'services',
        path : '/services',
        icon : <i className="bi bi-caret-down-fill"></i>,
        subNavOption : [
        {
        title : 'event Ticketing',
        path : 'services/servicelist'
        },
        {
        title : 'artiste booking',
        path : 'services/bookinglist'
        },
        {
        title : 'enter studio',
        path : '/home/listevent',
        }
        ]
        },

        {
        title : 'add-on',
        path : '/addon'
        },

        {
        title : 'wallet',
        path : '/'
        },

        {
        title : 'raffle',
        path : '/raffle',
        icon : <i className="bi bi-caret-down-fill"></i>,
        subNavOption : [
        {
        title : 'entries',
        path : 'raffle/entries'
        },
        {
        title : 'results',
        path : 'raffle/results'
        }
        ]
        },
        {
        title : 'coupon',
        path : '/coupon',
        icon : <i className="bi bi-caret-down-fill"></i>,
        subNavOption : [
        {
        title : 'couponed product',
        path : 'coupon/coupon'
        }
        ]
        },
        {
        title : 'transaction',
        path : '/transaction'
        },
        {
        title : 'notification',
        path : '/notification'
        },
        {
        title : 'signout',
        path : '/logout'
        }
  ];
  
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


{/* className="active" */}

    {menuItems.map((menuItem, index) => (
        <li  key={index}>
          <a href={menuItem.path}>
          {menuItem.icon}
          <span>{menuItem.title}</span>
          </a>
        </li> 
    ))}





        <li>
          <a href="{{ route('products.index') }}">
          <i className="fa-solid fa-tag"></i>
           <span>my application</span>
           </a>
           <ul>
            <li>
            <a href="{{ route('products.index') }}">
          <i className="fa-solid fa-tag"></i>
           <span>create a product</span>
           </a>
            </li>
            <li>
            <a href="{{ route('products.index') }}">
          <i className="fa-solid fa-tag"></i>
           <span>onboarding</span>
           </a>
            </li>
           </ul>
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