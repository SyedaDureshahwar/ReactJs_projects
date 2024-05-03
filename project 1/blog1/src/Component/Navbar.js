import React from 'react'
import {Link} from "react-router-dom"
const Navbar = ({setcategorys}) => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container">
    <a className="navbar-brand " href="#"><span className='badge text-dark bg-light fs-4'>News Mega</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
        <Link className='nav-link ' to={``}>Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link ' to={`about`}>About</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link ' to={`contact`}>Contact</Link>
        </li>
        
      
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   Category
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#"><div className="nav-link "onClick={()=>setcategorys("technology")} >technology</div></a></li>
    <li><a class="dropdown-item" href="#"><div className="nav-link " onClick={()=>setcategorys("sports")}>sports</div></a></li>
    <li><a class="dropdown-item" href="#">  <div className="nav-link " onClick={()=>setcategorys("business")} >business</div></a></li>
    <li><a class="dropdown-item" href="#"> <div className="nav-link " onClick={()=>setcategorys("entertainment")} >entertainment</div></a></li>
    <li><a class="dropdown-item" href="#"> <div className="nav-link " onClick={()=>setcategorys("health")}>health</div></a></li>


    <li><a class="dropdown-item" href="#"> <div className="nav-link " onClick={()=>setcategorys("science")}>science</div></a></li>

    <li><a class="dropdown-item" href="#"> <div className="nav-link " onClick={()=>setcategorys("sports")}>sports</div></a></li>
    
  </ul>
</div> 
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar