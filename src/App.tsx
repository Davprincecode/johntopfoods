import { Route, Routes} from "react-router-dom";

import 'react-multi-carousel/lib/styles.css';
import Blog from "./component/Blog";
import BlogDetails from "./component/BlogDetails";

import LandingPage from "./pages/Product";
import PageDetails from "./pages/PageDetails";
import NewLandingPage from "./pages/NewLandingPage";
import AboutUs from "./pages/AboutUs";
import ImageGallery from "./pages/ImageGallery";
import ProductList from "./pages/ProductList";
import SupermarketList from "./pages/SupermarketList";


function App() {
  return (

  <div className="App">
    
    
    <Routes>
        <Route path="/pages" element={<LandingPage />}/>
        <Route path="/pagedetail" element={<PageDetails />}/>
       
          {/* ----------------------------------------------------------- */}

        <Route path="/" element={<NewLandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product-list" element={< ProductList />} />
        <Route path="/supermarket-list" element={< SupermarketList />} />


        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
    </Routes>
 
  </div>
  )
}

export default App
