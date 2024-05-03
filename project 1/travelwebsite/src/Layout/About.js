import React from 'react'
import "./About.css"
import img1 from "../images/unsplash_i9Q9bc-WgfE.png"
const About = () => {
  return (
    <>
    
    <div className='container-fluid aboutbg pt-5  pb-5'>
       <div className='row justify-content-between'>
        <div className='col-md-5 '>
            <h2 className='text-white ms-2 mb-3'>About us</h2>
<h3 className='text-white'>
Become Part of <br/>
two-weak canada western conques
</h3>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu</p>
        </div>
        <div className='col-md-5 '>

            <div className='imgabout'>
                <img src={img1}/>
            </div>
        </div>
       </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default About