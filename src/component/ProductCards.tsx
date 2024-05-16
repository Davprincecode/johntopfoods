// import React from 'react'
// import product1 from "../assets/images/100g (sole fish) - Ziplock pack.jpg";
import product2 from "../assets/images/100g - Plastic pack.jpg";
import product3 from "../assets/images/100g - Ziplock pack.jpg";
import product4 from "../assets/images/15g - Nylon pack.jpg";
import product5 from "../assets/images/200g - Ziplock pack.jpg";
import product6 from "../assets/images/productbckremove.png";


function ProductCards() {
  return (
    <div className='cardsParentCon'>
      <div className="cardsHeader">
        <h1>some of our product</h1>
      </div>
      <div className="cardsParent">
        <div className="cardsItems">
         <div className="productImg">
          <img src={product6} alt="" />
         </div>

         <div className="productDetails">
          <div className="productName">
            <h4>sole fish</h4>
          </div>
          <div className="productWeight">
           <h5>200<span>kg</span></h5> 
          </div>
          <div className="productPrice">
            
           <h4><span>₦</span>2000</h4>
           <h4>-</h4>
           <h4>5000</h4>
          </div>
         </div>
          
          <div className="cardBtn">
            <div className="btn">
              <p>order</p>
            </div>
          </div>

        </div>
        <div className="cardsItems">
         <div className="productImg">
          <img src={product2} alt="" />
         </div>

         <div className="productDetails">
          <div className="productName">
            <h4>sole fish</h4>
          </div>
          <div className="productWeight">
            <h5>200 <span>kg</span></h5>
          </div>
          <div className="productPrice">
           <h4><span>₦</span>2000</h4>
           <h4>-</h4>
           <h4>5000</h4>
          </div>
         </div>
          
          <div className="cardBtn">
            <div className="btn">
              <p>order</p>
            </div>
          </div>

        </div>
        <div className="cardsItems">
         <div className="productImg">
          <img src={product3} alt="" />
         </div>

         <div className="productDetails">
          <div className="productName">
            <h4>sole fish</h4>
          </div>
          <div className="productWeight">
            <h5>200 <span>kg</span></h5>
          </div>
          <div className="productPrice">
           <h4><span>₦</span>2000</h4>
           <h4>-</h4>
           <h4>5000</h4>
          </div>
         </div>
          
          <div className="cardBtn">
            <div className="btn">
              <p>order</p>
            </div>
          </div>

        </div>

        <div className="cardsItems">
         <div className="productImg">
          <img src={product4} alt="" />
         </div>

         <div className="productDetails">
          <div className="productName">
            <h4>sole fish</h4>
          </div>
          <div className="productWeight">
            <h5>200 <span>kg</span></h5>
          </div>
          <div className="productPrice">
           <h4><span>₦</span>2000</h4>
           <h4>-</h4>
           <h4>5000</h4>
          </div>
         </div>
          
          <div className="cardBtn">
            <div className="btn">
              <p>order</p>
            </div>
          </div>
        </div>

        <div className="cardsItems">
         <div className="productImg">
          <img src={product5} alt="" />
         </div>

         <div className="productDetails">
          <div className="productName">
            <h4>sole fish</h4>
          </div>
          <div className="productWeight">
            <h5>200 <span>kg</span></h5>
          </div>
          <div className="productPrice">
           <h4><span>₦</span>2000</h4>
           <h4>-</h4>
           <h4>5000</h4>
          </div>
         </div>
          
          <div className="cardBtn">
            <div className="btn">
              <p>order</p>
            </div>
          </div>

        </div>
        <div className="cardsItems">
         <div className="productImg">
          <img src={product6} alt="" />
         </div>

         <div className="productDetails">
          <div className="productName">
            <h4>sole fish</h4>
          </div>
          <div className="productWeight">
            <h5>200 <span>kg</span></h5>
          </div>
          <div className="productPrice">
           <h4><span>₦</span>2000</h4>
           <h4>-</h4>
           <h4>5000</h4>
          </div>
         </div>
          
          <div className="cardBtn">
            <div className="btn">
              <p>order</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ProductCards
