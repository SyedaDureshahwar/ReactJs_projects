import React from 'react'

import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-light">© 2023 Company, Inc</p>



          <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
              <Link class=" text-light nav-link active" to="home">HOME</Link>
            </li>
            <li class="nav-item">
              <Link class="text-light nav-link active" to="reviews">FEATURES</Link>
            </li>

            <li class="nav-item">
              <Link class=" text-light nav-link active" to="about">ABOUT</Link>
            </li>
            <li class="nav-item">
              <Link class=" text-light nav-link active" to="contact">CONTACT</Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer