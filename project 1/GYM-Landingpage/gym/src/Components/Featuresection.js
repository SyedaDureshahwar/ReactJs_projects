import React from 'react'
import "./Featuresection.css"
import girlimage from "../images/girlimage.jpg"
const Featuresection = () => {
  return (
    <div className='container'>
        <br></br><br></br>
        <div className='row text-white'>
            <div className='col-md'>
                <span className='fw-bold fs-3 text-danger text-center'>4 Week <br></br> Workout Plan</span>
                <br></br>
                <p className='mt-5 '>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.  </p>
                <button className='btn btn-section'>Learn More</button>
            </div>
            <div className='col-md'>
                <div className='imgsection '>
<img src={girlimage}></img>
                </div>
            </div>

            <div className='col'>
            <div className='row'>
            <div class="card bg-danger text-white " style={{width: "18rem"}}>
  <div class="card-body ">
    <h5 class="card-title text-dark fw-bold">GET INSPIRED</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<button className='btn btn-dark text-light fw-bold'>Learn more</button>
    
  </div>
</div>
<div class="card bg-danger text-white mt-1" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title text-dark fw-bold">CHALLENGE YOURSELF</h5>
    
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <button className='btn btn-dark text-light fw-bold'>Learn more</button>
    
  </div>
</div>
            </div>
           
            </div>


        </div>
    </div>
  )
}

export default Featuresection