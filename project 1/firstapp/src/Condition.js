import React, { useState } from 'react'

export const Condition = () => {
    let [no,setno]=useState("")
    let [template,settemplate]=useState("")
    let checkage=()=>{
        console.log(no)
    if(no>=18){
    
        settemplate( <p>you are elligible</p>);
    }
    else{
        settemplate(<p>you not are elligible</p>)

    }
    }
  return (
    <>
    <label>enter a no</label>
    <input type='number' value={no} onChange={(e)=>setno(e.target.value)}></input>
    <button onClick={checkage}>check</button>
    <div>{template}</div>
    </>
  )
}
