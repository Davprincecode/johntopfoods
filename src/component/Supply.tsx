import super1 from "../assets/images/supermarket1.jpeg";
import super3 from "../assets/images/supermarket3.jpeg";
import super4 from "../assets/images/img.jpg";
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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
      
</Carousel>
</div>
  {/* ====================== */}
    {/* ===================== */}
       <div className="aboutUsDetails">
          <h2>Some Supermarkets We Supply</h2>
          <p>
          At Johntop Foods, we  supply over 90+ outlets across Ogun State, Ondo State , Oyo State, kwara State , Lagos State, Osun State and FCT Abuja including:
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
<li> Foodco  (check all the 14 outlets in Ibadan)</li>
  </ul>
       
      <div className="aboutBtn">
      <a href="https://wa.me/2348057386375?text=Hello,  Can you supply us with your product in our suppermarket">
       <div className="btn">
           <p>contact for supply</p>
           <FontAwesomeIcon icon={faArrowRight} />
       </div>
       </a>
       </div>

       </div>
{/* =================== */}


     </div>
   </div>

    </div>
  )
}

export default Supply

