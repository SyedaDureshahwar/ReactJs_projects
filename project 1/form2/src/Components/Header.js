import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='Header ' style={{ width: '100%' ,backgroundColor:"rgb(117, 81, 150)",height:"150px"}}>
    <h1 className='ms-5 pt-3'>Contact Us</h1>
    <p  className='ms-5'>Questions, bugs report, feedback -- we're here it all.</p>
</div>
  )
}

export default Header