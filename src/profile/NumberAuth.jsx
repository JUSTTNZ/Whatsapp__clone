import React from 'react'
import '../css/NumberAuth.css'
// import Signup from '../Signup'
import PhoneInput from 'react-phone-input-2' //
import 'react-phone-input-2/lib/style.css'  //import the react-phone-input css

const NumberAuth = () => {
  return (
    <div>
   <h1>phone number page</h1>
<PhoneInput
  country={'ng'}
  // value={}
  // onChange={}
/>
    </div>
  )
}

export default NumberAuth
