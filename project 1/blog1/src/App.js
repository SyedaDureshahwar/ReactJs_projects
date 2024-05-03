import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Newsboard from './Component/Newsboard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Component/About';
import Contact from './Component/Contact';
import NoPage from './Component/NoPage';
import Footer from './Component/Footer';

const App = () => {
  let [category,setcategory]=useState("general")
  return (
    <div> 
    <BrowserRouter>
    <Navbar setcategorys={setcategory} ></Navbar>
      <Routes>
       
        <Route path="/" element={<Newsboard category={category}></Newsboard>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
         
          <Route path="*" element={<NoPage />} />
         
        
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    
    </div>
  )
}

export default App