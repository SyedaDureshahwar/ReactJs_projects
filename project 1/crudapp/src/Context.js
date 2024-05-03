import React, { useEffect, useState } from 'react'
import {data} from "./data"
import "./Context.css"
const Context = () => {
    let [data1,setdata1]=useState([])
    let [fname,setfname]=useState("")
    let [lname,setlname]=useState("")
    let [age,setage]=useState(0)
    let [id,setid]=useState(0)
    let [update,setupdate]=useState(false)
    useEffect(()=>{
        setdata1(data)
    },[])


    let handeledit=(value)=>{
      setupdate(!update)
      let dataa=data1.filter((item=> item.id===value))
      if(dataa!==undefined){
        setid(value)
        setfname(dataa[0].fname)
        setlname(dataa[0].lname)
        setage(dataa[0].age)
      }
    
    }
    let handeldelete=(value)=>{
       if(value>0){
         let dataa=data1.filter((item=> item.id!==value))
         setdata1(dataa)
       }
        
    }


    let handelsave=(e)=>{
      e.preventDefault();
      let newob={
      id:data.length+1,
      fname:fname,
      lname:lname,
      age:age
      }
      
      let newdata=[...data1]
      newdata.push(newob)
      setdata1(newdata)
    }
    let handelclear=()=>{
      setid(0)
      setfname("")
      setlname("")
      setage("")
    }
let Update=()=>{
let index=data1.map((value,index)=>{
  return value.id
}).indexOf(id)

let newdata=[...data1]
newdata[index].fname=fname
newdata[index].lname=lname
newdata[index].age=age

setdata1(newdata)
handelclear()
setupdate(!update)
}









  return (








    <div style={{maxWidth:"800px" ,margin:"auto"}}>

<h1 className='text-center text-primary mt-5 mb-2 fs-1'> CRUD</h1>
<div className='inputarea'>

<div className="mb-3">
  <label for="formGroupExampleInput" className="form-label">First Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter First Name" value={fname} onChange={(e)=>setfname(e.target.value)}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter Last Name" value={lname} onChange={(e)=>setlname(e.target.value)}/>
</div>
<div className="mb-3">
  <label for="formGroupExampleInput2" className="form-label">Age</label>
  <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter age" value={age} onChange={(e)=>setage(e.target.value)}/>
</div>


{update?<button className='btn bg-primary text-light me-1' onClick={()=>Update()}>Update</button>:<button className='btn bg-primary text-light me-1' onClick={(e)=>handelsave(e)}>Save</button>}

<button className='btn bg-success text-light' onClick={()=>handelclear()}>Clear</button>
</div>






  <table className="table table-dark ">
  <thead>
    <tr>
        <td>Sr.no</td>
        <td>ID</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Age</td>
        <td>Action</td>
    </tr>

  </thead>
  <tbody>
    {data1.map((datavalues,index)=>{
        return(
            <tr key={index}>
            
            <td>{index+1}</td>
            <td>{datavalues.id}</td>
            <td>{datavalues.fname}</td>
            <td>{datavalues.lname}</td>
            <td>{datavalues.age}</td> 
            <td>
                <button className='btn bg-primary text-light' onClick={()=>handeledit(datavalues.id)}>Edit</button> <button   onClick={()=>handeldelete(datavalues.id)}className='btn bg-success text-light'>Delete</button></td> 
            </tr>
        )
    })}
  </tbody>
</table>
    </div>
  )
}

export default Context