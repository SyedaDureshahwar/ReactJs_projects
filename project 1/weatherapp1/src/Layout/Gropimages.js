import React from 'react'
import "./Gropimages.css"
import Button from '../Component/Button'
import Group2 from "./Group2.png"

const Gropimages = () => {
  return (
    <>
  <div className='container mt-5'>
    <div className='row justify-content-center  p-4'>
        <div className='col-md-4 text-dark'>
        <h1 className=' text-dark'>Transforming <br></br> Ideas Into <br></br>Master piece</h1>
                <p className=' text-dark'>Lorem Ipsum has been the industry's standard when an unknown printer took a galley of type and scrambled
                </p>
                 <Button title="Learn More" ></Button>
        </div>
        <div className='col-md-5'>
            <div className='groupimg'>
                <img src={Group2}/>
            </div>
        </div>
    </div>
    </div>  
    
    </>
  )
}

export default Gropimages