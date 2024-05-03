import React from 'react'
import News from "./NEWS.jpg"
import { Link } from 'react-router-dom'
const Newsitem = (props) => {
  return (
    
 <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"  style={{width:"300px"}} >
  <img src={props.image?props.image:News} style={{height:"200px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title?props.title.slice(0,50):"News is not available"}</h5>
    <p className="card-text">{props.desciption?props.desciption.slice(0,90):"news is not avialable"}</p>
    <a href={props.url} className="btn btn-danger">Read More</a>
  </div>
</div>
    
  )
}

export default Newsitem