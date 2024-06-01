import React from "react";
import callData from "./callData";
import { FaPhone } from 'react-icons/fa';
import { FaVideo } from "react-icons/fa";
import '../css/calls.css'
const Calls = () => {
    return (
        <div className="callss">
            {callData.map((call, index) => (
                <div key={index} className="call-entry">
                    <img src={call.picture} alt={call.caller} className="caller-picture" />
                    <div className="caller-content">
                        <div className="caller-details">
                            <p className="caller-name">{call.caller}</p>
                            <p className="call-time">10:30 AM</p>
                        </div>
                        <div className="icon-content">
                            <FaVideo className="phone-icon" />
                            <span className="income">incoming</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Calls;