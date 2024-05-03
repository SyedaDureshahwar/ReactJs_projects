import React from 'react'
import Button from '../Component/Button'
import "./Fixedlayout.css"
const Fixedlayout = () => {
  return (
    <>
    <div className='container-fuild fixedlayoutbg mt-5 mb-5' >
        <div className='row justify-content-md-end'>
            <div className='col-md-6 pt-5'>
                <h2 className='tophead'>SCHEDULE A DEMO <br/> SESSION</h2>
                <p >Lorem Ipsum is not simply random text. It has roots <br/>in a piece of classical Latin literature from 45 BC,<br/> making it over 2000 years old. Richard</p>
                  <input className='formfiled me-3 mt-3' type='email'></input><Button  title="Send"></Button>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Fixedlayout