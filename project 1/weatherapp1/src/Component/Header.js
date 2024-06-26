import React from 'react'
import "./Header.css"
import image from "./image.png"
import { Link} from 'react-scroll';
const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg nav-bg fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#"><img className='navimage' src={image}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  me-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link activelink" aria-current="page" to="/">Home</Link>

          
         
        </li>
        <li  className="nav-item">
        <Link className="nav-link activelink" aria-current="page" to="about">About</Link>
        
        </li>
        <li  className="nav-item">
        <Link className="nav-link activelink" aria-current="page" to="porfolio">Porfolio</Link>
       
        </li>
        <li  className="nav-item">
        <Link className="nav-link activelink" aria-current="page" to="services">Services</Link>
        
        </li>
        
      </ul>
      <div className="d-flex" role="search">
        
        <button className="btn " type="submit">Contact Us</button>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header