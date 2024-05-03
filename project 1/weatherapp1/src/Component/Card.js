import React from 'react'
import "./Card.css"
const Card = (props) => {
  return (
    <>
    <div className='col-md-3'>
        <div className='content text-center mt-2'>

        <i className="fa-solid fa-bolt fa-3x mb-2" style={{color:" #ffffff"}}></i>

<h2 className='text-light mb-3 '>{props.title}</h2>
<p>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
</p>


        </div>
    </div>
    
    </>
  )
}

export default Card