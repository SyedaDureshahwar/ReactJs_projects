import React from 'react'

const Cards = (props) => {
  return (
    <>
     <div className="col-md-5 mx-auto mb-3">
     <div class="card">
  <div class="card-header">
    {props.data.id}
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.data.title} </h5>
    <p class="card-text">{props.data.body}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</>
  )
}

export default Cards