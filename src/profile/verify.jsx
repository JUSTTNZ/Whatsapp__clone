
import React,{useState} from "react";
import { useLocation,} from "react-router-dom";

const VerifyOtp = (
) => {
  const [otp, setOtp] = useState("");
  const { state: { phoneNumber,newRandomCode } } = useLocation();

  // Check if both phoneNumber and dummyCode are defined
if (!phoneNumber || !newRandomCode) {
    return <div>Loading...</div>;
  }

  const handleOtpInputChange = (event) => {
    setOtp(event.target.value);
  };

  const verifyOtp = () => {
    if (otp == newRandomCode) {
      alert("OTP verified successfully. Redirecting to the next page...");
      // Implement your navigation logic here
    } else {
      alert("Incorrect OTP, please try again.");
    }
  };

  return (
    <div>
      <h1>Verify OTP</h1>
      <p>Enter the OTP sent to {phoneNumber} to verify:</p>
      <p>OTP code: {newRandomCode}</p>
      <input type="text" value={otp} onChange={handleOtpInputChange} />
      <button onClick={verifyOtp}>Verify OTP</button>
    </div>
  );
};

export default VerifyOtp;
