import React from 'react'
import "./Footer.css"
import footerlogo from "./footerlogo.png"
import Space from './Space'
const Footer = () => {
  return (
    <>
    <Space></Space>
    <div className="container-fluid bg-footer ps-md-5  mt-5" >
  
   <div className='container'>
    <div className='row justify-content-evenly'>
      <div className='col-md-4'>
<div className='footerlogo'  >
  <img  src={footerlogo}/>
  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
</div>
      </div>
      <div className='col-md-4 rightctnfooter '>
      <div class="col-md-4 offset-md-1 mb-3">
      <h5>Address</h5>
      <p className='addres'>
        John Doe<br/>
        123 Main St<br/>
        Cityville, State<br/>
        Country<br/>
        Postal Code: 12345
    </p>
    <div>
    <i className="fa-brands fa-2x  fa-facebook me-2" style={{color:" #fcfcfc"}}></i>
    <i className="fa-brands fa-2x fa-twitter  me-2" style={{color: "#ffffff"}}></i>
    <i className="fa-brands fa-2x fa-linkedin" style={{color:" #ffffff"}}></i>
    </div>
    </div>
      </div>
      <div className='col-md-4 rightctnfooter '>
      <div class="col-md-4 offset-md-1 mb-3">
      <h5>Section</h5>
      <p className='addres'>
      Contrary to popular belief, Lorem Ipsum  College in Virginia, looked up one of the more obscure Latin words, consectetur
    </p>
  
    </div>
      </div>
    </div>
   </div>

    

    


</div>
    </>
  )
}

export default Footer