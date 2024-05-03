import React, { useState } from 'react'

const Form = () => {
  const formcontrol=(event)=>{
    event.preventDefault()
  }
  let [sname,setsname]=useState("Enter your first name")
  let [lname,setlname]=useState("Enter your last name")
  
  let valuesget=()=>{
    console.log(sname," ",lname )
  }
  return (
    <>
    <div className='text-center mb-5 mt-5 text-primary'>Form</div>
    <form className='container' onSubmit={formcontrol}>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input type="text" className="form-control" value={sname} onChange={(e)=>setsname(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
    <input type="text" value={lname} onChange={(e)=>setlname(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button onClick={valuesget} type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
    
  )
}

export default Form