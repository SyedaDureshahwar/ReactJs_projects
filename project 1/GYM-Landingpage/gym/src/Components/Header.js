import React, { useState } from 'react';
import logo from '../images/logo.png';
import './Header.css';
import { Link } from 'react-scroll';
const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg text-light sticky-md-top ">
                <div class="container">
                    <a class="navbar-brand" href="#"><img src={logo} /></a>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='float-md-end fs-5'>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <Link class=" text-light nav-link active" to="home">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="text-light nav-link active" to="reviews">Features</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" text-light nav-link active" to="offer">Offer</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" text-light nav-link active" to="about">About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class=" text-light nav-link active" to="contact">Contact</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )

}

export default Header