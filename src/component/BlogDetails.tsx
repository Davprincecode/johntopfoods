// import React from 'react'
import Carousel from 'react-multi-carousel';
import image1 from "../assets/images/100g - Plastic pack.jpg";
import image2 from "../assets/images/350g (Sole fish) - Ziplock pack.jpg";
import image3 from "../assets/images/30g (spices) - nylon pack.jpeg";
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
function BlogDetails() {
  return (
    <div className='blogDetails'>
    {/* <h1>hhhh</h1> */}
   <div className="blogBodyDetails">
    <div className="blogDetailsHeader">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quidem nostrum! Natus ratione sapiente odio.</h1>
    </div>

    
    <div className="blogDetailImg">
    <Carousel 
 responsive={responsive}
 autoPlay={true}
 swipeable={true}
 draggable={true}
 showDots={true}
 infinite={true}
 partialVisible={false}
//  dotListClass="custom-dot-list-style"
>
    <div className="blogImgCon">
        <img src={image1} alt="" />
    </div>

    <div className="blogImgCon">
        <img src={image2} alt="" />
    </div>

    <div className="blogImgCon">
        <img src={image3} alt="" />
    </div>
   </Carousel>
    </div>
     </div>
     {/* ====================== */}
     <div className="blogDetailsPost">
        <p>
            Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ex corrupti veniam ipsum dolorem voluptate 
             dolorum, magnam omnis, itaque molestiae porro quibusdam 
             repudiandae harum nostrum totam officiis veritatis ducimus 
             pariatur ipsam sed beatae fugiat dicta! Ducimus quibusdam 
             odit enim suscipit officiis excepturi et? Recusandae eum 
             enim culpa voluptas optio facilis, rerum veniam ab mollitia 
             praesentium, officia porro repudiandae, id quibusdam nostrum 
             fugit eaque facere molestiae debitis non quidem vero dolorum 
             corrupti consectetur. Veritatis beatae laudantium, accusamus 
             porro in eligendi necessitatibus adipisci ipsa fuga veniam 
             repellat dignissimos? Voluptates alias aliquid numquam, 
             doloribus molestiae expedita dolore atque eum nihil, 
             quaerat accusamus ab. Eos debitis autem asperiores 
             deserunt sunt? Odio atque esse ad dignissimos necessitatibus
              dolor temporibus! Quidem, officiis consequatur nostrum alias
               porro illo dolores quisquam veniam ipsa aut fugiat itaque, 
               commodi, quaerat reprehenderit fuga. Minima consequuntur 
               nesciunt id repudiandae. Dolore quia cum reprehenderit 
               obcaecati reiciendis temporibus, minima labore animi 
               dolorum maxime architecto commodi adipisci tempore porro 
               deleniti laudantium modi distinctio rerum maiores nam. 
               Totam quisquam cupiditate, eaque accusantium et sequi modi,
                consequuntur blanditiis animi, temporibus placeat dolorem? 
                Tempore doloribus est accusamus corrupti quas ratione, 
                quaerat aut aliquid voluptate quis rerum atque nisi, 
                vel laudantium a repellendus consequuntur repudiandae! 
                Laborum sed dolore porro tempore.
        </p>
     </div>
{/* ============== */}
    </div>
  )
}

export default BlogDetails