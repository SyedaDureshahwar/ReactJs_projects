import React from 'react'
import Banner from './component/Banner'
import Header from './component/Header'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from  './component/Home'
import About from  './component/About'
import Contact from  './component/Contact'
import NoPage from  './component/NoPage'
import User from './component/User';
const App = () => {
  
  return (
    <div>
     <BrowserRouter>
     <Header></Header>
      <Routes>
        
          <Route  path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="user/:username" element={<User />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App