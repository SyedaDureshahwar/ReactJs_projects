import React from 'react'
import "./Travelmap.css"
import img2 from "../images/unsplash_JoH60FhTp50.png"
const Travelmap = () => {
  return (
    <>
    
    <div className='container-fluid travelss  pt-5  pb-5'>
       <div className='row justify-content-between'>
       
        <div className='col-md-5 '>

            <div className='imgtravel'>
                <img src={img2}/>
            </div>
        </div>
        <div className='col-md-5 '>
            <h2 className='text-white ms-2 mb-3'>Travel map</h2>
<h3 className='text-white'>
Explore & enjoy
</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
        </div>
       </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Travelmap

