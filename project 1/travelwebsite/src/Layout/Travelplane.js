import React from 'react'
import "./Travelplane.css"
import Circle from '../Components/Circle'
import Space from '../Components/Space'
const Travelplane = () => {
  return (
    <>
    <Space></Space>
    <div className='container-fluid travelplane'>
<div className='row '>
    <h3 className='text-white text-center mb-5'>
    Camper travel plane
    </h3>




</div>

<div className='row'>
    <Circle name="vancouver" value="1"></Circle>
    <Circle name="victoria" value="2"></Circle>
    <Circle name="Pacific rim" value="3"></Circle>
    <Circle name="whistler" value="4"></Circle>
</div>
<div className='row'>
    <Circle name="calgary" value="5"></Circle>
    <Circle name="banff" value="6"></Circle>
    <Circle name="jasper" value="7"></Circle>
    <Circle name="wells gray
park" value="8"></Circle>
</div>
    </div>
    </>
  )
}

export default Travelplane