import React from 'react'
import "./Header.css"
import { Link} from 'react-scroll';
const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg fixed-top ">
  <div class="container">
    <a class="navbar-brand" href="#">CAMPER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
       
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="about">About</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link active" aria-current="page" to="explore">Explore</Link>
        </li>
      </ul>
      <form class="d-flex usuer" role="search">
      
       <div><i class="fa-solid fa-user"></i><span className='ms-3'>Account</span></div>
      </form>
    </div>
  </div>
</nav></>
  )
}

export default Header