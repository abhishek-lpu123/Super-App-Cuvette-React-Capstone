import React from 'react'
import ProfileImg from '../../assests/char-img.png'
import './Info.css'
function Info() {
  return (
    <div className='info'>
      <div className='char_img'>
        <img className='profile_img' src= {ProfileImg} alt='profile'/>
      </div>
    </div>  
  )
}

export default Info;