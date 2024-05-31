
import React,{useState} from "react";
import { useLocation,} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import '../css/verify.css'
const VerifyOtp = (
) => {
  const number = useSelector((state) => state.Number)
  const randomcode = useSelector((state) => state.Code)
  const [otp, setOtp] = useState("");
  
const navigate = useNavigate()
  // Check if both phoneNumber and dummyCode are defined
if (!number || !randomcode) {
    return <div>Loading...</div>;
  }

  const handleOtpInputChange = (event) => {
    setOtp(event.target.value);
  };

  const verifyOtp = () => {
    if (otp == randomcode) {
      alert("OTP verified successfully. Redirecting to the next page...");
      // Implement your navigation logic here
      navigate("/get-user");
    } else {
      alert("Incorrect OTP, please try again.");
    }
  };

  return (
    <div className="verify-container">
      <h1>Verify OTP</h1>
      <p>Enter the OTP sent to {number} to verify:</p>
      <p>OTP code: {randomcode}</p>
     
      <input type="text" value={otp} onChange={handleOtpInputChange} />
      <button onClick={verifyOtp} className="verify-btn btn btn-secondary">NEXT</button>
    </div>
  );
};

export default VerifyOtp;
