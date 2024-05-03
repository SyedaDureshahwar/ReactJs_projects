import React from 'react'
import "./Circle.css"
const Circle = (props) => {
  return (
    <>
    <div className='col-md-3  cardcircle'>
<p className='text-white text-center'>{props.name}</p>
<div className='circles'>
<p className='text-white text-center'>{props.value}</p>  
</div>
    </div>
    
    </>
  )
}

export default Circle