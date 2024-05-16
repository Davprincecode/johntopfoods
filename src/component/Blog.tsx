import React from 'react'
import image1 from "../assets/images/100g - Plastic pack.jpg";

function Blog() {
  return (
    <div className="blogMainCon">

    <h1>My Blog</h1>

      <div className="blogMain">

{/* ======================= */}

        <div className="blog">
            <a href="">
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
         </div>
         </a>
        </div>
{/* ====================== */}

{/* ======================= */}

        <div className="blog">
            <a href="">
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
         </div>
         </a>
        </div>
{/* ====================== */}

      </div>
    </div>
  )
}

export default Blog
