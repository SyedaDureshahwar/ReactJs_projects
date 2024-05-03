import React from 'react'
import "./Servicecard.css"
const Servicecard = (props) => {
  return (
    <>
    <div className='col-md-3'>
        <div className='content1 text-center'>

        <i className="fa-solid fa-bolt fa-3x mb-2" style={{color:" #1679AB"}}></i>

<h2 className='text-dark mb-3 '>{props.title}</h2>
<p className='text-muted'>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
</p>


        </div>
    </div>
    
    </>
  )
}

export default Servicecard