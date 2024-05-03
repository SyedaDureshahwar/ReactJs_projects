import React from 'react'
import "./Transport.css"
import img3 from "../images/unsplash_6mcVaoGNz1w.png"
const Transport = () => {
  return (
    <>
    
    <div className='container-fluid    trans pt-5  pb-5'>
       <div className='row justify-content-between'>
        <div className='col-md-5 '>
            <h2 className='text-white ms-2 mb-3'>Transport</h2>
<h3 className='text-white'>
How to move around?
</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
        </div>
        <div className='col-md-5 '>

            <div className='imgabout'>
                <img src={img3}/>
            </div>
        </div>
       </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Transport