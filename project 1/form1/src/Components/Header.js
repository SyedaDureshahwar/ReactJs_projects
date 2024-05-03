import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div><nav className="navbar navbar-expand-lg navbg">
    <div className="container">
      <a className="navbar-brand titlenav" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon bg-light"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link nav1 " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link nav1" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle nav1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item  nav1" href="#">Action</a></li>
              <li><a className="dropdown-item nav1" href="#">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item nav1 " href="#">Something else here</a></li>
            </ul>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}

export default Header