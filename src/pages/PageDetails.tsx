import image5 from '../assets/images/100g - Plastic pack.jpg'



const PageDetails = () => {
  return (

   <div className="pageDetails">
    <div className="product-title-container"></div>

    <div className="pageDetailsTop">

        <div className="pageimagewrapper">
          <div className="pageDetailsImage">
            <img src={image5} />
        </div>  
        </div>
        
        <div className="pagedetailsDetails">
            <div className="detailstitle">
               <h1> Bonitas Coconut Chips 3.53oz (100g) </h1> 
            </div>
            <div className="detailsdescription">
                <p>
                    Bonitas Coconut Chips are crispy, 
                    lightly toasted coconut slices with a naturally sweet and nutty flavor.
                     Rich in fiber and healthy fats, they make a nutritious and delicious snack,
                     perfect for on-the-go munching or as a topping for desserts, yogurt, and cereals.
                </p>
            </div>

            <div className="detailsCategory">
                <p>Category <span>New arrivals</span></p>
            </div>
        </div>

    </div>


    <div className="pageBottom">
        <div className="pageBottomTitle">
            <div className="dotLine"></div>
            <h1>related product</h1>
            <div className="dotLine"></div>
        </div>

        <div className="relatedProduct">

        </div>
    </div>


   </div>


  )
}

export default PageDetails