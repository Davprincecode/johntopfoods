import seaFoods from '../assets/images/Combine.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from '../component/Header'
import Footer from '../component/Footer'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const AboutUs = () => {
     const { pathname } = useLocation();
    
      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);


  return (
    <div className="bodyWrapper">
        <Header/>
        <div className='aboutUs' id="aboutUs">
      <div className="aboutCon">

        <div className="aboutUsImg">
            <img src={seaFoods} alt="" />
            
        </div>

        <div className="aboutUsDetails">

            <div className="aboutWrapUp">
            <h2>Who We Are</h2>
            <p>
            <strong>Johntop Foods</strong> is a proudly registered and trusted Nigerian seafoods brand, delivering the <strong> freshest, </strong> <strong>cleanest,</strong> and <strong>highest-quality dried</strong>  and  <strong>fresh seafoods products</strong> 
            </p>

            <div className="newCon">
                <p>
                We are fully approved and recognized:
            </p>
            <ul>
                <li>✅ CAC (Corporate Affairs Commission) Registered</li>
                <li>✅ Trademark Certified</li>
                <li>✅ SON (Standards Organisation of Nigeria)</li>
                <li>✅ NAFDAC (National Agency for Food and Drug Administration and Control) Certified</li>
            </ul>
            </div>

            <div className="anotherNewCon">
                {/* 🛍️  */}
                <h2>Our Specialty Includes:</h2> 
                <ul>
                    <li>✅ Premium dried fish </li>
                    <li>✅ Carefully sieved crayfish</li>
                    <li>✅ Ground and spicy crayfish</li>
                    <li>✅ Fresh seafoods </li>
                </ul>
            </div>
            
            <div className="newConBottom">
                <p>We serve a wide range of clients — from <span>homes</span>  and <span>restaurants</span>  to <span> supermarkets, hotels, shopping malls, </span> and <span> kitchens </span>  — ensuring quality and consistency every step of the way.</p>
                <p>With over <span>90+ outlets supplied nationwide,</span>  we’ve earned our reputation through dedication, hygiene, and excellence.</p>
            </div>

          </div>

            <div className="aboutUsSection">
                {/* 💡  */}
                <h2>Why Choose Johntop Foods?</h2>

                <ul className="whchooseus">
                    <li>💯 Strict hygiene and sorting standards</li>
                    <li>📦 Neatly packaged and kitchen-ready</li>
                    <li>🚚 Nationwide & international delivery</li>
                    <li>🤝 Reliable for bulk supply and retail shelves</li>
                    <li>📑 Fully certified and approved for safe food distribution</li>
                </ul>
                {/* 📍  */}
                <p>With branches in Ile-Ife (Osun State) and Ayetoro (Ondo State), we’re always within reach.
                At Johntop Foods — your health, trust, and satisfaction come first.</p>

<div className="aboutBtn">
                <a href="https://wa.me/2348057386375?text=Hello,  I need quotation or price on sea foods">
                <div className="btn">
                    <p>Get Quotation</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </a>
</div>

            </div>

            

        </div>

      </div>
    </div>
        <Footer/>
    </div>
  )
}

export default AboutUs