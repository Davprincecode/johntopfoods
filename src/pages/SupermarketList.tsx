import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import super1 from "../assets/images/supermarket1.jpeg";
import super3 from "../assets/images/supermarket3.jpeg";
import super4 from "../assets/images/img.jpg";
import super5 from "../assets/images/img4.png";
import Carousel from 'react-multi-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
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



const SupermarketList = () => {

   const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bodyWrapper">

        <Header/>
    <div className='aboutUs ' id="aboutUs">
      <div className="aboutCon ">
      {/* ======================== */}
        <div className="carsel supplierHero">
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
  
        
       <div className="supermarket-list-con">
         
         
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
                  <div className="state-list">
                        
                        <ul>    
                            <p>Ibadan, Oyo State</p> 
                            <li> 📍 Ace mall Bodija, Akobo and Oluyole</li> 
                            <li> 📍 Brent supermarket Apata, Sawmill, Olomi and Moniya </li>
                            <li> 📍 Tango supermarket Jericho Mall </li>
                            <li> 📍 Vanguard pharmacy, Monatan, ring road, Ologuneru (check all the outlets in Ibadan) </li>
                            <li> 📍  More Mart inside Vintage Mall Alakia and Olorunsogo  </li>
                            <li> 📍 Westmead supermarket Mokola </li>
                            <li> 📍 His Praise supermarket Bodija  </li>
                            <li> 📍 Buy and Save supermarket  </li>
                            <li> 📍 Prime Mall Bodija Ibadan </li>
                            <li> 📍 Sunrise supermarket (Bond Mall) Bodija, Akala way, Akobo and Ring road </li>
                            <li> 📍 Foodco Monatan, Jericho, ring road, Bodija, Ologuneru (check all the 20+ outlets in Ibadan) </li>
                            <li> 📍 Hailey supermarket Kolade Ishola Akobo </li>
                            <li> 📍 Minarets Pharmacy Apete and branches  </li>
                            <li> 📍 Optimed pharmacy Monatan and branches </li>
                            <li> 📍 Grocery park supermarket inside Iris Mall Apata  and Amuloko Ibadan </li>
                            <li> 📍Polat supermarket Iletitun Ibadan  </li>
                            <li> 📍 Eazypick Oluyole </li>
                            <li> 📍 Richbam Opposite UI </li>
                            <li> 📍 Mirasan varieties orita challenge </li>
                            <li> 📍 Destination Mall Onibuore </li>
                            <li> 📍Aroma Restaurant </li>
                        </ul>

                         <ul>
                            <p>Ogbomoso Oyo State</p>
                            <li>📍 Tasbif supermarket Ogbomoso </li>
                            <li>📍 Alata supermarket Ogbomoso </li>
                            <li>📍 Ace supermarket Ogbomoso </li>
                            <li>📍 Brent supermarket Ogbomoso </li>
                         </ul>

                        <ul>
                            <p>Osogbo Osun State</p>
                            <li>📍 Ace supermarket Osogbo. </li>
                            <li>📍 Embassy supermarket Osogbo.</li>
                            <li>📍 Magrite mall Osogbo</li>
                            <li>📍 Lead superstore Osogbo</li>
                            <li>📍 Lead superstore Ilesa garage </li>
                            <li>📍 Vanguard pharmacy, opp. Technical college Osogbo.</li>
                            <li>📍 More Mart Agunbelewo Osogbo</li>
                            <li>📍 Ojaja More Abere Osogbo</li>
                            <li>📍 City star⭐ Mart Osogbo</li>
                            <li>📍 Vanguard Pharmacy Power lines Area Osogbo </li>
                            <li>📍 BTQ Superstore Testing ground Area Osogbo</li>
                            <li>📍London Boui supermarket Dada Estate Osogbo</li>
                            <li>📍More Mart Opposite Technical College Osogbo</li>
                            <li>📍Pharmadon T.A. Pharmacy Outlet 1 and 2  near Ilesa garage Osogbo</li> 
                            <li>📍 Ojaja More Ogooluwa Osogbo </li>
                            <li>📍 Richtaste Mart Osogbo </li>
                            <li>📍Trumax pharmacy Osogbo </li>
                        </ul>
                        <ul>
                            <p>Ilesa Osun State</p>
                            <li>📍  Lead superstore Ilesa </li>
                            <li>📍 Akewusola pharmacy Ilesa </li>
                        </ul>
                        <ul>
                            <p>Ile-Ife Osun State</p>
                            <li>📍 Ace supermarket Ile-Ife </li> 
                            <li>📍 Imperial supermarket Ile-Ife </li>
                            <li>📍 Ojaja More Ile-Ife </li>
                            <li>📍 Pretty concept supermarket Ile-Ife </li> 
                            <li>📍 Unique superstore Ile-Ife </li>
                            <li>📍 Xela Hotel Ile-Ife </li>
                        </ul>
                         <ul>
                            <p>Owode Ede Osun State</p>
                            <li>📍 Unique superstore Owode Ede</li>
                            <li>📍 Trumax pharmacy Owode Ede</li>
                         </ul>

                          <ul>
                            <p>Ilorin Kwara State</p>
                            <li>📍 Ace supermarket Ilorin.</li>
                        </ul>

                         <ul>
                            <p>Akure Ondo State</p>
                            <li>📍 Ojaja More Akure </li>
                            <li>📍 Tiki farm Akure </li>
                        </ul>

                          <ul>
                            <p>Ogun state</p>
                            <li>📍Ace supermarket Abeokuta </li>
                            <li>📍 Ace supermarket Ijebu-ode </li>
                            <li>Ace supermarket Sagamu</li>
                        </ul>

                        <ul>
                            <p>Abuja FCT</p>
                            <li>📍 Cost cutter supermarket, Wuse 2 Abuja</li>
                        </ul>
                    
                        
                    </div>
                
          <div className="aboutBtn">
            <a href="https://wa.me/2348057386375?text=Hello,  Can you supply us with your product in our suppermarket">
            <div className="btn">
                <p>View More</p>
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

export default SupermarketList