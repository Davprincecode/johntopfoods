import React from 'react'
import Header from '../component/Header'
import LandingPage from './LandingPage'
import Supply from '../component/Supply'
import SuperMat from '../component/SuperMat'
import Footer from '../component/Footer'

const NewLandingPage = () => {
  return (
    <div className="bodyWrapper">
    <div className="overWrapPage">
        <Header/>
        <div className="flierHeroSection">
        </div>
        <LandingPage/>
        <Supply />
        <SuperMat />
    </div>
    <Footer/>
    </div>
  )
}

export default NewLandingPage