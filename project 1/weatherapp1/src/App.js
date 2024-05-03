import React from 'react'

import Header from './Component/Header'
import Footer from './Component/Footer'
import Herosection from './Layout/Herosection'
import About from './Layout/About'
import Faqs from './Layout/Faqs'
import Fixedlayout from './Layout/Fixedlayout'
import Cardpost from './Layout/Cardpost'
import Services from './Layout/Services'
import Layout2 from './Layout/Layout2'
import Gropimages from './Layout/Gropimages'


const App = () => {
  return (
    <div>
    <Header></Header>
    <Herosection></Herosection>

    <About></About>
    <Gropimages></Gropimages>
   
  
 <Fixedlayout></Fixedlayout>
 <Cardpost></Cardpost>
 <Faqs></Faqs>
 <Layout2></Layout2>

<Services></Services>
    <Footer></Footer>
    </div>
  )
}

export default App