import React from 'react'
import "./App.css"
import Footer from './Components/Footer'
import Heroheader from './Layout/Heroheader'
import About from './Layout/About'
import Travelmap from './Layout/Travelmap'
import Transport from './Layout/Transport'
import Explore from './Layout/Explore'
import Whysection from './Layout/Whysection'
import Cardgroupsection from './Layout/Cardgroupsection'
import Fixwedbgimag from './Layout/Fixwedbgimag'
import Travelplane from './Layout/Travelplane'
import SLider from './Components/SLider'

const App = () => {
  return (
    <span className="bac">
    <Heroheader></Heroheader>
    <About></About>
    <Travelmap></Travelmap>
    <Transport></Transport>
    <Explore></Explore>
    <Whysection></Whysection>
    <SLider></SLider>
    <Cardgroupsection></Cardgroupsection>
    <Fixwedbgimag></Fixwedbgimag>
    <Travelplane></Travelplane>
    <Footer></Footer>
    </span>
  )
}

export default App