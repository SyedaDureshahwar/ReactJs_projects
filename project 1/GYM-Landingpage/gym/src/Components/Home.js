import React from 'react';
import './Home.css';
const Home = () => {

  let Joinus = () => {
    alert('hello');
  }

  return (

    <>
      <div className='container-fluid' id='home'>
        <div className='row text-center text-light'>
          <div className='col  bgimage'>

            <div className='contentpose  fs-1'>
              <div className='bannerbg'>
                <h2  className='bt-5 '>STEP UP YOUR
                </h2>
                <h1><span style={{ color: 'red' }}>FITNESS</span> WITH US</h1>
                <p>Build Your Body And fitness <br></br> With Professtion Touch</p></div>
              <br />
              <button onClick={Joinus} className=' fs-4  text-center  p-3 buttonactive1 buttonactivehover1'>Join Us</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home