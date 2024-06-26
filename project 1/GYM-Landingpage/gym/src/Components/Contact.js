import React from 'react';
import './Contact.css';
const Contact = () => {
    let contatform=(event)=>{
        event.preventDefault()
    }
    return (
        <>
        <br></br> <br></br>
        <h1 id="contact" className='text-red text-center fw-bold'>Contact Us</h1>
        <div className='container text-light' style={{width:"600px"}}>
        <form class="row g-3 border border-danger p-3 mt-5" onSubmit={contatform}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" placeholder='Email' class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" placeholder='Password' class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" placeholder="City" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Lahore</option>
      <option>Islamabad</option>
      <option>Karachi</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" placeholder="Zip" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn text-light buuton-red px-5 py-2">Sign in</button>
  </div>
</form>
</div> 
        </>
    )
}

export default Contact;