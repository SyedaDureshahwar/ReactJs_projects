import React from 'react'
import "./Herosection.css"
import Button from '../Component/Button'
import busnessman  from "./busnessman.png"

const Herosection = () => {
  return (
    <>
    <div id="/" className='container-fluid bg-herosection'>
    <div className='container'>
        <div className='row pt-5'>
            <div className='col-md-5 left-ctn'>
                <h1>Transforming <br></br> Ideas Into <br></br>Master piece</h1>
                <p>Lorem Ipsum has been the industry's standard when an unknown printer took a galley of type and scrambled
                </p>
                <Button title="Contact Us" ></Button> <Button title="Learn More" ></Button>
            </div>
            <div className='col-md-4 image-container '>
            
            <img src={busnessman} alt="Your Image" className="image" />
    </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Herosection