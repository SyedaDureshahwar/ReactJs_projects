import React, { useState } from 'react'

const Tenary = () => {
    let [show,setshow]=useState(true)
    
    let passfun=()=>{
        setshow(!show)
    }
  return (
    <>
    <input type={(show)?"password":"text"}></input>
    <button onClick={passfun} >{(show)?"show":"hide"}</button>
    </>
  )
}

export default Tenary