import React from 'react'
import './Signup.css'
import signupImage from '../../assets/signupBackground.png'
// import { Link } from 'react-router-dom'


const Signup = (setNumberAuth) => {
  return (
    <div className='signup-main'>
        <div>
          <h2 className='signup-header'>Welcome to Whatsapp</h2>
        </div>
        <div className='signupImage'>
          <img src={signupImage} alt=''/>
        </div>
        <div className='links1'>
          <div className='privacy-terms-links'>
            <p>Read our <a href='../../links/Privacy.js'>Privacy Policy.</a>Tap "Agree and continue" to <br></br>accept the <a href='../../links/Terms and Service.js'>Terms of Service.</a></p>
          </div>   
          <div className='agree-continue-link'>
            <a href='./NumberAuth/NumberAuth.jsx'>AGREE AND CONTINUE onClick={()=> setNumberAuth(prev=>prev?false:true)}</a>
          </div> 
        </div>

        <div className='meta'>
            <h5 className='from'>from</h5>
            <h5>FACEBOOK</h5>
        </div>
    </div>
  )
}

export default Signup
