// import seaFood from "../assets/images/seafood.png";
// import seaFood2 from "../assets/images/seafood2.png";
import super1 from "../assets/images/supermarket1.jpeg";
import super2 from "../assets/images/supermarket2.jpeg";
import super3 from "../assets/images/supermarket3.jpeg";
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
     
     <div className="aboutCon">
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
       <div className="aboutUsImg">
           <img src={super1} alt="" />
        {/* <div className="aboutBtn">
       <div className="btn">
           <p>contact us</p>
           <FontAwesomeIcon icon={faArrowRight} />
       </div>
       </div> */}
       </div>


       <div className="aboutUsImg">
           <img src={super2} alt="" />
        {/* <div className="aboutBtn">
       <div className="btn">
           <p>contact us</p>
           <FontAwesomeIcon icon={faArrowRight} />
       </div>
       </div> */}
       </div>


       <div className="aboutUsImg">
           <img src={super3} alt="" />
        {/* <div className="aboutBtn">
       <div className="btn">
           <p>contact us</p>
           <FontAwesomeIcon icon={faArrowRight} />
       </div>
       </div> */}
       </div>
</Carousel>
</div>
  {/* ====================== */}
    {/* ===================== */}
       <div className="aboutUsDetails">
          <h2>Some Supermarket We Supplied</h2>
          <p>
            We supply a wide range of seafood products to these supermarkets,
            ensuring that customers have access to fresh and high-quality seafood options.
            If you're a supermarket owner or manager,
            consider partnering with us to offer your customers the best seafood experience!
          </p>
          <ul>
            <li>ace</li>
            <li>brent</li>
            <li>ojaja more e.t.c</li>

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

