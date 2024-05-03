

import React, { useState } from 'react'
import "./Contact.css"


const Contact = () => {
let [name,setname]=useState("")
let [email,setemail]=useState("")
let [password,setpassword]=useState("")
let [phone,setphone]=useState("")
let [city,setcity]=useState("")
let [message,setmessage]=useState("")
let [data,setdata]=useState([{
    name:"ali",email:"ali@example.com",password:"snknsjk",phone:"3709710970",city:"lahore",message:"hehkc djjkd"
}])
let savedetails=()=>{
let newdata={ name:name,email:email,password:password,phone:phone,city:city,message:message
}
setdata([...data,newdata])
console.log(data)


setname("")
setpassword("")
setemail("")
setphone("")
setcity("")
setmessage("")



}

let formcontrols=(event)=>{
    event.preventDefault();
}
  return (
    <div className='body'>
        <div className='container '>
            <div>
               < h4 className='headerh4 pt-5'>DEFINEETE</h4>
               <h1 className="headerh1">Lets's connect</h1>
               <p className='headerp'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of to make a type specimen book.
               </p>
            
            </div>
            <div className='row'>
                <div className='col-md-5'>

    <form className='bgform' onSubmit={formcontrols}>
     <div className="row">
  <div className="col mb-4">
    <input type="Name"  value={name} onChange={(e)=>setname(e.target.value)}    className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  
</div>                      
 <div className="row">
  <div className="col">
    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Email" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)}  className="form-control" placeholder="Password" aria-label="Last name"/>
  </div>
</div>
<div className="row mt-4">
  <div className="col">
    <input type="text" value={city} onChange={(e)=>setcity(e.target.value)}  className="form-control" placeholder="City" aria-label="First name"/>
  </div>
  <div className="col">
    <input type="number" value={phone} onChange={(e)=>setphone(e.target.value)}   className="form-control" placeholder="Phone No" aria-label="Last name"/>
  </div>
</div>
<div className="row mt-4">
  
  <div className="col">
   <textarea value={message} onChange={(e)=>setmessage(e.target.value)}  placeholder='Write Your Message Here'></textarea>
  </div>
</div>
<div className='row justify-content-end'>
    <div className='col-md-5 mt-3'>
       <button  type="submit" className='btn btn-light text-danger py-3 px-5' onClick={savedetails}>Send</button>
    </div>
</div>
                     </form>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Contact