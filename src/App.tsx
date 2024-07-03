// import { useState } from 'react';
import { Route, Routes} from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import 'react-multi-carousel/lib/styles.css';
import ContactBtn from "./component/ContactBtn";
import Blog from "./component/Blog";
import BlogDetails from "./component/BlogDetails";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import MapUi from "./component/MapUi";

function App() {
  return (
  <div className="App">
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails" element={<BlogDetails />} />
    </Routes>
    <ContactBtn />
    {/* <MapUi /> */}
    <Footer/>
  </div>
  )
}

export default App
