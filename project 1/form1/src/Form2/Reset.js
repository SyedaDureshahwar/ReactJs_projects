import React, { useState } from 'react'
import "./Form2.css"
import Header from "../Components/Header"
import { Link } from 'react-router-dom'
const Reset = () => {


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
<span className='formheading mb-4'>Reset FORM</span>

         <div className="mb-3">
           
            <input type="email" className="form-control  " id="exampleFormControlInput1"  value={uemail} onChange={(e)=>setuemail(e.target.value)} /><i class="fa-solid fa-user" style={{color:"black",fontSize:"25px"}}></i> 
          </div>
         
          <div className="mb-3">
             <a>Login? <span className='forgotpassword'><Link to="/">Click Here!</Link></span></a>
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

export default Reset