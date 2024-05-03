import React from 'react'

import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/' className="nav-link active" aria-current="page">Home</Link>
        <Link  to='/about' className="nav-link active" aria-current="page" >About</Link>
        <Link to='/contact' className="nav-link active" aria-current="page">Contact</Link>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header;