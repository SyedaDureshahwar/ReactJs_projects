import React from 'react'
import "./About.css"
import groupimageabout from "./groupimageabout.jpg"
const About = () => {
  return (
    <>
    < div id="about" className='container mt-5' >
      <div className='row'>
      <div className='col-md-6'>
      <div className="about-img">
           
      <img src={groupimageabout} alt="Your Image" />
    </div>
        </div>
        <div className='col-md-6'>
          <div>
            <h2 style={{fontWeight:"bolder"}}>We Are To Increase <br>
            </br> Your Business</h2>
            <p className='text-muted'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <div className='row mt-3 mb-3'>
              
<div className='col-4 aboutcont '><h4>182+</h4><span>Projects</span></div>
<div className='col-4 aboutcont'><h4>192+</h4> <span>Software</span></div>
<div className='col-4 aboutcont'><h4>130+</h4><span>Empolyee's</span></div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
    </>
  )
}

export default About