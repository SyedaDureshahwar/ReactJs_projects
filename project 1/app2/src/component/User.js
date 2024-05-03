import React from 'react'
import {useParams}  from "react-router-dom"
const User = () => {
  let params=useParams()
  return (
    <div>User {params.username}</div>
  )
}

export default User