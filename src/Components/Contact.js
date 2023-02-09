import React from 'react'
// import { house } from "react-bootstrap-icons";

function Contact() {
  return (
    <div>
        <p id="title">CONTACT</p>
        <div className='ms-2'>
          <div className='d-flex justify-content-start '>
              <i class="fs-4 bi bi-house"></i>
              <p className='ms-2' style={{position:"relative", top:5}}>dasdfghjkl;hgfsdfghjk</p>
          </div>
          <div className='d-flex'>
              <i class="bi fs-4 bi-telephone-fill"></i>
              <p className='ms-2' style={{position:"relative", top:5}}>123456789</p>
          </div>
          <div className='d-flex'>
              <i class="bi fs-4 bi-globe-americas"></i>
              <p className='ms-2'style={{position:"relative", top:5}}>www.asdfghjkl.com</p>
          </div>
        </div>
    </div>
  )
}

export default Contact