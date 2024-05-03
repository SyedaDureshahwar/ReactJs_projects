import React from 'react'


import "./Heroheader.css"
import Header from '../Components/Header'
const Heroheader = () => {
  return (
    <>
    <div className='container-fluid bgherosection'>

<Header></Header>

<div className='row justify-content-center bg-section'>
    <div className='col-md-5 text-center align-items-center'> 
   <p className='text-light'>JOIN US ON THE BIG CANADA ROAD TRIP</p>
  
    <h1 className='text-light'>It’s Great Time <br/>
to Start Living Now</h1>
    </div>
</div>

    </div>
    </>
  )
}

export default Heroheader