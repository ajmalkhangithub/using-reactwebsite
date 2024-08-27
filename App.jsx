import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "./About";
import Services from "./Services";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from "./Home";
import Contact from "./Contact";
import Navbar from "./Component/Navbar";
import Foter from "./Foter";

function App() {
  return (
    <>
     <Navbar/>
      <Routes>
     
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Services />} />
        <Route exact path='/contact' element={<Contact/>}></Route>
        {/* <Redirect to='/'/> */}
      </Routes>
      <Foter/>
    </>
  );
}

export default App;
