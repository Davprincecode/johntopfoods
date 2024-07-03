// import React from 'react'
import image1 from "../assets/images/100g - Plastic pack.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";


function Blog() {
  return (
    <div className="blogMainCon">

    <h1>My Blog</h1>

      <div className="blogMain">

{/* ======================= */}

        <div className="blog">
          <Link to="/blogdetails">
         <div className="blogImg">
            <img src={image1} alt="" />
         </div>
         <div className="blogContent">
            <div className="blogTitle">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, qui.</h1>
            </div>
            <div className="blogBody">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime omnis obcaecati vero quo. Impedit soluta earum commodi vel aperiam error optio repellendus, quam pariatur ullam.</p>
            </div>

            <div className="blogBtnFlex">
            <div className="blogBtn btn">
            <p>read more</p>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
            </div>

         </div>
         </Link>
       
        </div>
{/* ====================== */}

{/* ======================= */}

        <div className="blog">
        <Link to="/blogdetails">
         <div className="blogImg">
            <img src={image1} alt="" />
         </div>
         <div className="blogContent">
            <div className="blogTitle">
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, qui.</h1>
            </div>
            <div className="blogBody">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime omnis obcaecati vero quo. Impedit soluta earum commodi vel aperiam error optio repellendus, quam pariatur ullam.</p>
            </div>
            
            <div className="blogBtnFlex">
            <div className="blogBtn btn">
            <p>read more</p>
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
            </div>

         </div>
         </Link>
        </div>
{/* ====================== */}

      </div>
    </div>
  )
}

export default Blog
