import Header from '../component/Header'
import Product from './Product'
import Suppliers from '../component/Suppliers'
import SuperMat from '../component/SuperMat'
import Footer from '../component/Footer'
import Testimonies from '../component/Testimonies'
import HeroSection from '../component/HeroSection'

const NewLandingPage = () => {
  return (
    <div className="bodyWrapper">
    <div className="overWrapPage">
        <Header />
        <HeroSection />
        <Product />
        <Suppliers />
        <SuperMat />
        <Testimonies />
    </div>
    <Footer/>
    </div>
  )
}

export default NewLandingPage