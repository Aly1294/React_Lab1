import React from 'react'
// import photo from './im2.jpg'
import './img.css'


function Image() {
  return (
    <div className='image w-100 text-center '>
        <img className=' rounded-circle 'style={{width:250}} src={require("./im2.jpg")} alt="Person Image"/>
        {/* <img src={photo} alt="Person Image"/> */}
        <h1>HELLO</h1>
    </div>
  )
}

export default Image