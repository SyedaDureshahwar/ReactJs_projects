import React from 'react'
import Servicecard from '../Component/Servicecard'
import "./Services.css"
const Services = () => {
  return (
    <>


    <div className='container mt-5 mb-5 '>
    <h2 className='text-center mb-3 text-dark'>Our Services</h2>
        
        
        <div className='row justify-content-center mt-5 mb-5'>

        <Servicecard title="app"></Servicecard>
        <Servicecard title="app1"></Servicecard>
        <Servicecard title="app2"></Servicecard>
        </div>
       
        <div className='row justify-content-center mt-5 mb-5' >

        <Servicecard title="app3"></Servicecard>
        <Servicecard title="app5"></Servicecard>
        <Servicecard title="app6"></Servicecard>
        </div>
       
        
 
    </div>
    </>
  )
}

export default Services