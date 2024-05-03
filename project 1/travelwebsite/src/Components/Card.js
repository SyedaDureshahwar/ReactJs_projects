import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <>
    <div className='col-md-3 justify-content-center'>
        <div className='cardser'>
        <i class={props.classss} ></i>
        <h2 className='textgold text-center'> {props.counts}</h2>
        <h3 className='text-white text-center'>
        {props.heading}
        </h3>
        <p className='text-white text-center'>
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu
        </p>
        </div>
   
    </div>
    
    </>
  )
}

export default Card