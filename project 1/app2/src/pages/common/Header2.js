import React from 'react'

import { Link } from 'react-router-dom';



const Header2 = () => {
  return (
  <nav>
        <Link to='/' className="nav-link active" aria-current="page">Course</Link>
        <Link  to='/subject' className="nav-link active" aria-current="page" >Subject</Link>
        <Link  to='/blog' className="nav-link active" aria-current="page" >Blog</Link>
        </nav>  
     
  )
}

export default Header2;