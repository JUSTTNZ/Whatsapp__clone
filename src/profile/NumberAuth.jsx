import React from 'react'
import '../css/NumberAuth.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'  //import the react-phone-input css
// import { IconContext } from 'react-icons';
import { BsThreeDotsVertical } from 'react-icons/bs';

const NumberAuth = () => {
  return (
    <div className='main-container'>
     <div className='number-option'>
       <h1>Enter your phone number </h1>
      <div className='dots-option'>
        <BsThreeDotsVertical/>
      </div>
     </div>
       <h5>Whatsapp will need to verify your phone number. <a href='./'>What's my number ?</a>
       </h5>
     <div>
       <div className='phone-input'>
       <PhoneInput
        country={'us'}
        value={''}
        onChange={(phone) => console.log(phone)}
       /> 
       </div>
    </div>
        
        <p>Carrier charges may apply</p>
        <button className='next-button'>NEXT</button>
    </div>
  )
}

export default NumberAuth
