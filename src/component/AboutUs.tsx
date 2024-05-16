import React from 'react'
import seaFood from "../assets/images/seafood.png";
import seaFood2 from "../assets/images/Spanish.jpg";
import crayfish from "../assets/images/crayfishmove.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function AboutUs() {
  return (
    <div className='aboutUs'>
     
      <div className="aboutCon">
        

        <div className="aboutUsDetails">
           <h2>Welcome to JohnTop Foods</h2>
           <p>
           <strong>JohnTop Food</strong> is a registered company under NAFDAC, specializing in a wide variety of seafood products. Our registration has granted us the license to supply top-quality seafood to supermarkets, retail shops, and individual consumers. Whether you're a consumer, retailer, or wholesaler, you can trust us to provide you with the freshest seafood options.
           </p>
        
         <div className="aboutBtn">
        <div className="btn">
            <p>contact us</p>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
        </div>

        </div>

        <div className="aboutUsImg">
            <img src={seaFood2} alt="" />
          
            <div className="ant">
              <img src={crayfish} />
            </div>
            
            
        </div>

      </div>
    </div>
  )
}

export default AboutUs
