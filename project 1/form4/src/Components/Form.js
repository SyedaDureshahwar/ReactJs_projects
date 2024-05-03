import React, { useState } from 'react'
import "./Form.css"

const Form = () => {

let [fname,setfname]=useState("")

let [lname,setlname]=useState("")
let [email,setemail]=useState("")
let [password,setpassword]=useState("")
let [cpassword,setcpassword]=useState("")
let [phone,setphone]=useState("")









    let formcontrol=(event)=>{
        event.preventDefault()
        setfname("")
        setlname("")
        setemail("")
        setphone("")
        setpassword("")
        setcpassword("")
    }
  return (
<div className='bgbody '>
   <div className='text-light text-end'>Sign Up Form</div>
<div className='cardform mt-5'>
<div className='container cardcon' >
   
    <div  className='row '>
          <div className='left col-md'> 
          </div>
          <div className='right col-md  mt-1'> 
          <h1 className='mt-5 mb-5'>Sign Up</h1>
          <form onSubmit={formcontrol}>
            
          <div class="row mb-4">
  <div class="col">
    <input type="text"    value={fname} onChange={(e)=>setfname(e.target.value)} class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text"  value={lname} onChange={(e)=>setlname(e.target.value)}  class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>

<div class="row mb-4">
  <div class="col">
    <input type="text"  value={phone} onChange={(e)=>setphone(e.target.value)}  class="form-control" placeholder="Phone" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="email"  value={email} onChange={(e)=>setemail(e.target.value)}  class="form-control" placeholder="Email" aria-label="Last name"/>
  </div>
</div>
<div class="row  mb-4">
  <div class="col">
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}   class="form-control" placeholder="Password" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="password" value={cpassword} onChange={(e)=>setcpassword(e.target.value)}  class="form-control" placeholder="Confrim Password" aria-label="Last name"/>
  </div>
</div>
            
            <div className='row'>
                <div className='col'>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
    I accept terms & conditions.
  </label>
                </div>
         
            </div>
            <div className='row mt-md-5'>
                <div className='col'>
               <button type='submit ' className='btn'>Send</button>
                </div>
         
            </div>
            
            
            
            
            </form> </div>
    </div>
    </div>
</div>








    </div>
  )
}

export default Form