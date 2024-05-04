import React from 'react'
import "./Cards.css"
const Cards = (props) => {
  return (
    <div className=' col-md text-center'>
    <i class=" bgicon  fa-solid fa-person-running  mb-5" ></i><br />
    <h4 style={{ color: 'red' }}> {props.title}</h4>
    <p> {props.description}
    </p>
 </div>
  )
}

export default Cards