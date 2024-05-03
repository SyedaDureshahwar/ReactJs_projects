import React, { useState } from 'react'
import "./Loginsignup.css"
import Header from "../Components/Header"
import { Link } from "react-router-dom";

const Forgot = () => {

 
  let [uname,setuname]=useState("")
  let [uemail,setuemail]=useState("")
 

 
  let [dataArray, setDataArray] = useState([
    {name:"ali",email:"ali@gmail.com"}
  ]);

  let saveddata=()=>{
    setDataArray([...dataArray,{name:uname,email:uemail}])
    console.log(dataArray)
  }
  let formcontrol=(event)=>{
   
    event.preventDefault();
    setuemail("");
    setuname("");
  }







  return (
    <div className='bg'>

      <Header></Header>
<form onSubmit={formcontrol}>
      <div className='form-background container mt-5 mb-5  '>
       <div className='childflex'>
        <span className='formheading'>Forgot Password </span>
        <div className="mb-3">
            <label htmlForor="exampleFormControlInput1" className="form-label">Name</label>
         <input type="text" className="form-control " id="exampleFormControlInput1"  value={uname} onChange={(e)=>setuname(e.target.value)} />
                                </div>
 
            <div className="mb-3">
             <label htmlForor="exampleFormControlInput1" className="form-label">Email address</label>
             <input type="email" className="form-control " id="exampleFormControlInput1"value={uemail} onChange={(e)=>setuemail(e.target.value)}/>
              </div>

          

          <div className="mb-3">
             <a>Sign Up? <span className='forgotpassword'><Link to="/">Click Here</Link></span></a>
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

export default Forgot