import React, { useState } from 'react'
import "./Loginsignup.css"
import Header from "../Components/Header"
import { Link } from "react-router-dom";

const Loginsignup = () => {

  let [action,setaction]=useState("Sign up")
  let [uname,setuname]=useState("")
  let [uemail,setuemail]=useState("")
  let [upassword,setupassword]=useState("")

 
  let [dataArray, setDataArray] = useState([
    {name:"ali",email:"ali@gmail.com",password:"12345678"}
  ]);

  let saveddata=()=>{
    setDataArray([...dataArray,{name:uname,email:uemail,password:upassword}])
    console.log(dataArray)
  }
  let formcontrol=(event)=>{
   
    event.preventDefault()
    setuname("");
    setuemail("");
    setupassword("");
  }







  return (
    <div className='bg'>

      <Header></Header>
<form onSubmit={formcontrol}>
      <div className='form-background container mt-5 mb-5  '>
       <div className='childflex'>
        <span className='formheading'>{action} </span>
        <div className='mb-3 flexalign'>
        <button className={action==="Login"?"btn-sign grey":"btn-sign"} onClick={()=>setaction("Sign up")}>Sign up</button><button className={action==="Sign up"?"btn-sign grey":"btn-sign"}  onClick={()=>setaction("Login")}>Login</button>
        </div>
          {action==="Login"?<div></div>: <div className="mb-3">
            <label htmlForor="exampleFormControlInput1" className="form-label">Name</label>
         <input type="text" className="form-control " id="exampleFormControlInput1"  value={uname} onChange={(e)=>setuname(e.target.value)} />
                                </div>}
 
            <div className="mb-3">
             <label htmlForor="exampleFormControlInput1" className="form-label">Email address</label>
             <input type="email" className="form-control " id="exampleFormControlInput1"value={uemail} onChange={(e)=>setuemail(e.target.value)}/>
              </div>

           <div className="mb-3">
             <label htmlForor="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" className="form-control " id="exampleFormControlInput1" value={upassword} onChange={(e)=>setupassword(e.target.value)} />
             </div>

          <div className="mb-3">
             <a>Forgot Password? <span className='forgotpassword'><Link to="/password">Click Here</Link></span></a>
             </div>
            <div className="mb-3">
               
                <button type='submit' className="btn-sign" onClick={saveddata}>Submit</button>
                 </div>
                </div>
             </div>
        </form>
      </div>
  )
}

export default Loginsignup