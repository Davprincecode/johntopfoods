import super1 from "../assets/images/supermarket1.jpeg";
import super3 from "../assets/images/supermarket3.jpeg";
import super4 from "../assets/images/img.jpg";
import super5 from "../assets/images/img4.png";
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Supply() {
  return (
    <div className='Supply'>
     
     <div className='aboutUs'>
     
     <div className="aboutCon" id="aboutUsCon">
   {/* ======================== */}
   <div className="carsel">
        <Carousel 
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        //  showDots={true}
        infinite={true}
        partialVisible={false}
        >
       <div className="aboutUsImg" id="aboutUsImgSupply">
           <img src={super1} alt="" />
       </div>
        <div className="aboutUsImg" id="aboutUsImgSupply">
           <img src={super4} alt="" />
       </div>
       <div className="aboutUsImg" id="aboutUsImgSupply">
           <img src={super3} alt="" />
       </div>
       <div className="aboutUsImg" id="aboutUsImgSupply">
           <img src={super5} alt="" />
       </div>
      
</Carousel>
   </div>
  {/* ====================== */}
    {/* ===================== */}
       <div className="aboutUsDetails">

        <div className="header-title">
            <div className="doticon"></div>
             <h2> Some Supermarkets We Supply</h2>
        </div>
          <p>
          At Johntop Foods, we  supply over 90+ outlets across Oyo State, Osun State, Kwara State, Ondo State, Ogun State, Lagos State and FCT Abuja including:
          </p>
          <ul>
              <li>
                  🛒 Supermarkets
                </li>
                <li>
                  🏬 Shopping Malls
                </li>
                <li>
                  🍽️ Hotels & Restaurants
                </li>
                <li>
                  👩‍🍳 Kitchens & Catering Services
              </li>
          </ul>

          <div className="supplycon">
            <p>
              We deliver both premium dried, ground or spicy and fresh seafood products — trusted by top retailers and food service providers for quality, hygiene, and consistency
            </p>
          </div>
          <ul>    
 <p> Oyo state </p> 
<li> Ace mall Bodija, Akobo and Oluyole</li> 
<li> Brent supermarket Apata, Old Ife road and Moniya</li>
<li> Tango supermarket Jericho Mall</li>
<li> Vanguard pharmacy (check all the outlets in Ibadan)</li>
<li> Troy pharmacy Idi Ape</li>
<li> Troyhealth pharmacy Bodija</li> 
<li>  More Mart inside Vintage Mall Alakia and Olorunsogo</li> 
<li> Westmead supermarket Mokola</li>
<li> His Praise supermarket Bodija</li> 
<li> Foodco  (check all the 14 outlets in Ibadan) ....</li>
  </ul>
       
      <div className="aboutBtn">

      <NavLink to="/supermarket-list">
       <div className="btn">
           <p>View More</p>
           <FontAwesomeIcon icon={faArrowRight} />
       </div>
       </NavLink>

       </div>

       </div>
{/* =================== */}


     </div>
   </div>

    </div>
  )
}

export default Supply

