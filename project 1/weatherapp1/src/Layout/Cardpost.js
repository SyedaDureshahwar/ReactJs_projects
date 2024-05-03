import React from 'react'
import "./Cardpost.css"
import Card from '../Component/Card'
import cardpostimage from "./cardpostimage.jpg"
const Cardpost = () => {
  return (
    <>
   
    <div className='container mt-5 mb-5 cardsection'>
        <div className='row justify-content-center'>
        <Card title="Mobile Apps"></Card>
        <Card title="Web Apps"></Card>
        <Card title="Ecommerce "></Card>
        </div>
    </div>
    
    </>
  )
}

export default Cardpost