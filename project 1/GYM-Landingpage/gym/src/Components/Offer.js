import React from 'react';
import './Offer.css';
import offer from '../images/offer.png';
const Offer = () => {
  let Joinus = () => {
    alert('hello');
  }
  return (
    <>
      <div className='container-fluid' id='offer'>
        <br /><br /><br />
        <div className='row text-center text-light'>
          <div className='col posterimg1 '>

            <div className='contentpose1 fs-1'>
              <span className='bannerbg'>
                <h2  >A BIG <span style={{ color: 'red' }}>OFFER</span> FOR
                </h2>
                <h1> THIS SUMMER</h1>
                <p className='fs-3'>Build Your Body And fitness With Professtion Touch</p>
              </span> <br />
              <button onClick={Joinus} className=' fs-4 buttonactivehover1 buttonactive1 text-center  p-3 '>Join Us</button>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Offer;