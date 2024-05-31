import React,{useState} from 'react'
import '../css/NumberAuth.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'  //import the react-phone-input css
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { setNumber } from '../action'
import { setCode } from '../action'
const NumberAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [randomCode, setRandomCode] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validatePhone = () => {
    
    // Remove any leading or trailing whitespace
    const trimmedPhoneNumber = phoneNumber.trim();
  
    // Check if the phone number has at least 10 digits
    if (trimmedPhoneNumber.length >= 10) {
      return trimmedPhoneNumber;
    } else {
      alert("Please enter a valid phone number with at least 10 digits");
      return null; // Return null to indicate that the phone number is invalid
    }
  };
  
  const handleNumberChange = (phoneNumber) =>{
    const FormatPhone = "+" + phoneNumber
    setPhoneNumber(FormatPhone);
    dispatch(setNumber(FormatPhone))

  }

  const sendOtp = () => {
    if (buttonDisabled) {
      return;
    }
  
    setButtonDisabled(true);
  
    // Validate the phone number
    const validatedPhoneNumber = validatePhone();
  
    if (validatedPhoneNumber) {
      // If the phone number is valid, generate a random 6-digit number
      const newRandomCode = Math.floor(10000 + Math.random() * 90000);
  
      // Simulate a delay of 3 seconds for the "sending" process
      setTimeout(() => {
        setRandomCode(newRandomCode);
        dispatch(setCode(newRandomCode))
        navigate("/verify-otp");
        setButtonDisabled(false);
      }, 3000);
    } else {
      // If the phone number is invalid, enable the button again
      setButtonDisabled(false);
    }
  };

  return (
    <div className='main-container'>
     <div className='number-option'>
       <h1>Enter your phone number </h1>
      <div className='dots-option'>
        {/* <BsThreeDotsVertical/> */}
      </div>
     </div>
       <h5>Whatsapp will need to verify your phone number. <a href='./'>What's my number ?</a>
       </h5>
     <div>
       <div className='phone-input'>
       <PhoneInput
        country={"ng"}
        value={phoneNumber}
        onChange={handleNumberChange}
        // onChange={(phoneNumber) => setPhoneNumber("+" + phoneNumber)}
      />
       </div>
    </div>
        
        <p>Carrier charges may apply</p>
        <button className='next-button' onClick={sendOtp} disabled={buttonDisabled}>NEXT</button>
    </div>
  )
}

export default NumberAuth;


