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
import Homes from "./inventory/Homes";
import Pos from "./inventory/Pos";
import Table from "./inventory/Table";
// import MapUi from "./component/MapUi";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// interface JwtPayload {
//   email: string;
//   email_verified: boolean;
//   exp: number;
//   family_name: string;
//   given_name: string;
//   iat: number;
//   iss: string;
//   jti: string;
//   name: string;
//   picture: string;
//   sub: string;
// }
function App() {
  return (
//     <GoogleLogin
//   onSuccess={credentialResponse => {
//     const credentialResponsedecode = credentialResponse.credential
//   ? jwtDecode(credentialResponse.credential)
//   : null;
//     console.log(credentialResponsedecode);

//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />

  <div className="App">
    {/* <Header /> */}
    <Routes>
        <Route path="/mart" element={<Homes  />} />
        <Route path="/pos" element={<Pos  />} />
        <Route path="/table" element={<Table  />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
    </Routes>
    {/* <ContactBtn /> */}
    {/* <MapUi /> */}

    {/* <Footer/> */}
  </div>
  )
}

export default App
