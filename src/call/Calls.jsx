import React from "react";
import callData from "./callData";
import { FaPhone } from 'react-icons/fa';
import '../css/calls.css'
const Calls = () => {
    return (
        <div>
        {callData.map((call, index) => (
            <div key={index} className="call-entry">
               
                
                
                <img src={call.picture} alt={call.caller} className="caller-picture"  />
             
               
               <p className="caller-name">{call.caller}</p>
               
               <p className="call-time">10:30 AM</p>
               
              
                {/* <FaPhone className="phone-icon" /> */}
            </div>
        ))}
    </div>
    )
}
export default Calls;