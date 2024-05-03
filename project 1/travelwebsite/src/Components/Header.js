import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg ">
  <div class="container">
    <a class="navbar-brand" href="#">CAMPER</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
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