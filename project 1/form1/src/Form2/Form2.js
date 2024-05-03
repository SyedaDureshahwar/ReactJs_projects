import React, { useState } from 'react'
import "./Form2.css"
import Header from "../Components/Header"
import { Link } from 'react-router-dom'
const Form2 = () => {

  let [toogler,settoogler]=useState(true)
  let [uemail,setuemail]=useState("")
  let [upassword,setupassword]=useState("")

 
  let [dataArray, setDataArray] = useState([
    {email:"ali@gmail.com",password:"12345678"}
  ]);

  let saveddata=()=>{
    setDataArray([...dataArray,{email:uemail,password:upassword}])
    console.log(dataArray)
    setuemail("");
    setupassword("");
  }
  let formcontrol=(event)=>{
   
    event.preventDefault()
  }

let resetdetails=()=>{
    setuemail("");
    setupassword("");
  }





  return (
    <div className='bg'>
         <div className='overlay'> 
            <Header></Header>
              <form onSubmit={formcontrol} >
                  <div className='formcard ms-auto mt-5 me-5 '>
<span className='formheading mb-4'>LOGIN FORM</span>

         <div className="mb-3">
           
            <input type="email" className="form-control  " id="exampleFormControlInput1"  value={uemail} onChange={(e)=>setuemail(e.target.value)} /><i class="fa-solid fa-user" style={{color:"black",fontSize:"25px"}}></i> 
          </div>
          <div className="mb-3">
        
           <input type={toogler==true?"password":"text"} className="form-control " id="exampleFormControlInput1"  value={upassword} onChange={(e)=>setupassword(e.target.value)} />
          <i class={toogler==true?"fa-solid fa-lock":"fa-solid fa-unlock"}  style={{color:"black",fontSize:"25px"}} onClick={()=>settoogler(!toogler)}></i>
          </div>

          <div className="mb-3">
             <a>Forgot Password? <span className='forgotpassword'><Link to="/password">Click Here!</Link></span></a>
             </div>
            <div className="mb-3">
              
                <button type='submit' className="btn-sign" onClick={saveddata}>Confrim</button>
                <button type='reset' className="btn-sign" onClick={resetdetails} >Reset </button>
                 </div>


                    </div>
      
    
        </form>
        </div>
      </div>
  )
}

export default Form2