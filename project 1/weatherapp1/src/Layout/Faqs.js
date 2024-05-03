import React from 'react'
import"./Faqs.css"
const Faqs = () => {
  return (
    <>
    <div className='container  mt-5 mb-5' >
        <div className='row mt-5 '>
            <h2 className='text-dark  text-center' style={{fontWeight:"bolder"}}>Improve Your Business <br></br> With Experience </h2>

        </div>

        <div className='row mt-5 justify-content-evenly'> 
<div className='col-md-4'>
<div className='row box mb-3'>
<div className='col-4 boxchild'><i className="fa-solid pt-2 fa-magnifying-glass fa-3x" style={{color: "#ffffff"}}></i></div>
<div className='col-6 '><h4>Lorem Ipsum </h4><p>Lorem Ipsum is not  text. It has Richard</p></div>
</div>
<div className='row box mb-3'>
<div className='col-4 boxchild'><i class="fa-solid pt-2 fa-user fa-3x" style={{color: "#ffffff"}}></i></div>
<div className='col-6 '><h4>Lorem Ipsum </h4><p>Lorem Ipsum is not  text. It has Richard</p></div>
</div>

</div>
<div className='col-md-4'>
<div className='row box mb-3'>
<div className='col-4 boxchild'><i class="fa-solid pt-2 fa-envelope fa-3x"  style={{color: "#ffffff"}}></i></div>
<div className='col-6 '><h4>Lorem Ipsum </h4><p>Lorem Ipsum is not  text. It has Richard</p></div>
</div>
<div className='row box'>
<div className='col-4 boxchild'><i class="fa-brands  pt-2 fa-slack  fa-3x "  style={{color: "#ffffff"}}></i></div>
<div className='col-6 '><h4>Lorem Ipsum </h4><p>Lorem Ipsum is not text. It has Richard</p></div>
</div>

</div>
        </div>
    </div>
    </>
  )
}

export default Faqs