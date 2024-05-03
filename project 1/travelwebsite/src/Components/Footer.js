import React from 'react'
import "./Footer.css"
import Space from './Space'
const Footer = () => {
  return (
    <>
    <Space></Space>
    <div className='container-fluid bgfooter '>
    <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 ">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"></svg>
      </a>
      <h2 className='text-blue text-center mb-4' >CAMPER</h2>
      <p className='text-blue text-center'>© 2024</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h3 className='text-blue'>Section</h3>
      <ul class="nav flex-column">
        <li class="mb-2"><a href="# "  class="nav-link fw-bold p-0 text-white">Home</a></li>
        <li class="mb-2"><a href="#" class="nav-link  fw-bold  p-0 text-white">Features</a></li>
        <li class="mb-2"><a href="#" class="nav-link  fw-bold p-0 text-white">Pricing</a></li>
        <li class="mb-2"><a href="#" class="nav-link  fw-bold p-0 text-white">FAQs</a></li>
        <li class="mb-2"><a href="#" class="nav-link  fw-bold  p-0 text-white">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h3 className='text-blue'>Section</h3>
      <ul class="nav flex-column">
        <li class="mb-2"><a href="#" class="nav-link p-0 fw-bold text-white">Home</a></li>
        <li class="mb-2"><a href="#" class="nav-link p-0 fw-bold text-white">Features</a></li>
        <li class="mb-2"><a href="#" class="nav-link p-0 fw-bold text-white">Pricing</a></li>
        <li class="mb-2"><a href="#" class="nav-link p-0 fw-bold text-white">FAQs</a></li>
        <li class="mb-2"><a href="#" class="nav-link p-0  fw-bold text-white">About</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h3 className='text-blue'>Section</h3>
      <ul class="nav flex-column">
        <li class="text-black mb-2"><a href="#" class="nav-link fw-bold p-0 text-white">Home</a></li>
        <li class="mb-2"><a href="#" class="nav-link fw-bold p-0 text-white">Features</a></li>
        <li class="mb-2"><a href="#" class="nav-link fw-bold p-0 text-white">Pricing</a></li>
        <li class="mb-2"><a href="#" class="nav-link fw-bold p-0 text-white">FAQs</a></li>
        <li class="mb-2"><a href="#" class="nav-link  fw-bold p-0 text-white">About</a></li>
      </ul>
    </div>
  </footer>
</div>
       
    </div>
    
    
    
    </>
  )
}

export default Footer