import React from 'react'
import '../css/Signup.css' 
import signupImage from '../assets/signupBackground.png'
import { useNavigate } from 'react-router-dom'

const Signup = () => {


  const navigate = useNavigate()

// create a route to for numberauth page
  const agree = () => {
    navigate("/number_auth")
  }

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
            <p>Read our <a href='./privacy'>Privacy Policy.</a>Tap "Agree and continue" to <br></br>accept the <a href='./terms'>Terms of Service.</a></p>
          </div>   
          <div className='agree-continue-link'>
            <button onClick={agree}>AGREE AND CONTINUE</button>
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
