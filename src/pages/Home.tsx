// import React from 'react'
import AboutUs from "../component/AboutUs"
import Blog from "../component/Blog"
import Footer from "../component/Footer"
import Header from "../component/Header"
// import Carousel from "../component/Carousel"
import ProductCards from "../component/ProductCards"
import SuperMat from "../component/SuperMat"
import Supply from "../component/Supply"

function Home() {
  return (
    <div className="overWrapPage">
      <Header/>
      <AboutUs />
      <ProductCards />
      <Supply />
      <SuperMat />
      <Blog />
      <Footer/>
    </div>
  )
}

export default Home
