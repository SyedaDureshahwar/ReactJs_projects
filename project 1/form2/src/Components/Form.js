import React, { useState } from 'react'
import "./Form.css"



const Form = () => {

let [uemail,setuemail]=useState("")
let [upass,setupass]=useState("")
let [uaddress,setuaddress]=useState("")
let [uaddress2,setuaddress2]=useState("")

let [city,setcity]=useState("")
let [state,setstate]=useState("")
let [Zip,setZip]=useState("")
let [data,setdata]=useState([
  {uemail:"ali@gmail.com",upass:"ahguiuik",uaddress:"fnkndk",uaddress2:"fnkndk"
  ,city:"fnkndk",state:"fnkndk",Zip:"fnkndk"}
])

let savedata=()=>{
 
let newdata={
  uemail:uemail,upass:upass,uaddress:uaddress,uaddress2:uaddress2
  ,city:city,state:state,Zip:Zip

}
setdata([...data,newdata])

console.log(data)

  setuemail("")
  setupass("")
  setuaddress("")
  setuaddress2("")
  setstate("")
  setcity("")
  setZip("")
}
  
 let formeventcontrol=(event)=>{
  event.preventDefault();
  setuemail("")
  setupass("")
  setuaddress("")
  setuaddress2("")
  setstate("")
  setcity("")
  setZip("")
  
 }
  return (
    < div >
      <div className='container'>


         <form onSubmit={formeventcontrol}>
          < div className="container">
          <div  className='row'>
            <div className='col left'>
            <div class="row g-3">
  <div class="col-md-6 ">
    <label htmlFor="inputEmail4" class="form-label">Email</label>
    <input placeholder='Email' type="email" value={uemail} onChange={(e)=>setuemail(e.target.value)}  class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label htmlFor="inputPassword4" class="form-label">Password</label>
    <input type="password" placeholder='Password' value={upass} onChange={(e)=>setupass(e.target.value)} class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label htmlFor="inputAddress" class="form-label">Address</label>
    <input type="text" value={uaddress} onChange={(e)=>setuaddress(e.target.value)} class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label htmlFor="inputAddress2" class="form-label">Address 2</label>
    <input type="text" value={uaddress2} onChange={(e)=>setuaddress2(e.target.value)}  class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label htmlFor="inputCity" class="form-label">City</label>
    <input type="text" placeholder='City' value={city} onChange={(e)=>setcity(e.target.value)}  class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label htmlFor="inputState" class="form-label">State</label>
    <select id="inputState"  value={state} onChange={(e)=>setstate(e.target.value)} class="form-select">
      <option selected>Choose</option>
      <option>Punjab</option>
      <option>Sindh</option>
      <option>Khyber Pakhtunkhwa</option>
      <option>Khyber Pakhtunkhwa</option>
      <option>Gilgit-Baltistan</option>
    </select>
  </div>
  <div class="col-md-2">
    <label htmlFor="inputZip" class="form-label">Zip</label>
    <input type="text" placeholder='Zip' value={Zip} onChange={(e)=>setZip(e.target.value)} class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" onClick={savedata} class="btn btn-style">Sign in</button>
  </div>
</div>
            </div>
            <div className='col right'></div>
          </div>
          </div>

           
         </form>













      
      </div>
    </div>
  )
}

export default Form