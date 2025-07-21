import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import imgHeader from '../assets/images/headerimg.png';
import { NavLink } from "react-router-dom";

function HeroSection() {
  return (
    <div className='aboutUs herocon' id="aboutUs">
      <div className="aboutCon" id="heroflex">

        <div className="aboutUsDetails">
           <h2>Welcome to Johntop Foods</h2>
           <p>
           <strong>Johntop Foods</strong>  is a proudly registered and trusted Nigerian seafoods brand, delivering the freshest, cleanest, and highest-quality dried and fresh seafoods products.
            We are fully approved and recognized: ✅ CAC (Corporate Affairs Commission) Registered
            ✅ Trademark Certified
            ✅ SON (Standards Organisation of Nigeria)
            ✅ NAFDAC (National Agency for Food and Drug Administration and Control) Certified
           </p>
        
         <div className="aboutBtn">
          <NavLink to="/about-us">
            <div className="btn">
                <p>Read More</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </NavLink>
        </div>
        </div>

        <div className="aboutUsImg">
            <img src={imgHeader} alt="" />  
        </div>

      </div>
    </div>
  )
}

export default HeroSection
