import React from 'react'
import Header2 from './common/Header2'
import {useLocation} from 'react-router-dom';
import { data } from './common/data'
const Bolgdetails = () => {
    let uselocation=useLocation()
    let currentid=uselocation.pathname.split("/")[2]
    let datablogscuurnt=data.filter((v)=>v.id==currentid)[0]
  return (
    <div><Header2/>


        {datablogscuurnt.title}</div>
  )
}

export default Bolgdetails