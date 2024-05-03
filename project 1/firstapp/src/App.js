import React from 'react'
import Cards from './Cards'
import {data} from "./data"
const App = () => {
  return (
    <>
    <h1 className='text-center text-danger mb-5 mt-5'>Weolcome to react app</h1>
    <div className='Conatiner'>
      <div className='row'>
        {data.map((item,keys)=>{
          return   <Cards data={item}  key={keys}/>
        })}
     
      </div>












      
    </div>
    </>
  )
}

export default App