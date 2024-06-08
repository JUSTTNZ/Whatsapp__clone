import React,{useState} from "react";
import callData from "./callData";
import { FaPhone } from 'react-icons/fa';
import { FaVideo } from "react-icons/fa";
import '../css/calls.css'
import { FaLink } from "react-icons/fa";
const Calls = () => {
    const [callQuery, setCallQuery] = useState("");
    const handleCallChange = (e) => {
        setCallQuery(e.target.value)
    }
    const filterCall = callData.filter(
        ({caller}) => {
            if (
                caller &&
                caller.toLowerCase().includes(callQuery.toLowerCase())
            ){
                return true;
            }
            return false
        }
    )
    return (
        <div className="callss">
            <div className="call-header d-flex justify-content-between">
                <h5>Calls</h5>
                <FaPhone />
                
            </div>
              <div className='p-1'>
      <form className=''>
        <input
          type='text'
          className='search-input'
          placeholder='search or search a new call'
           value={callQuery}
           onChange={handleCallChange}
        />
      </form>
    </div>

    <div className="">
        <div className="link">
            <div className="link-circle">
               <FaLink className="link-icon" />
            </div>
             <div className="link-content">
                <div className="link-details">
                    <p>Create a call link</p>
                </div>
                <div className="share-content">
                    <span>Share a link for your whatsapp calls</span>
                </div>
             </div>
        </div>

    </div>
            {filterCall.map((call, index) => (
                <div key={index} className="call-entry">
                    <img src={call.picture} alt={call.caller} className="caller-picture" />
                    <div className="caller-content">
                        <div className="caller-details">
                            <p className="caller-name">{call.caller}</p>
                            <p className="call-time">10:30 AM</p>
                        </div>
                        <div className="icon-content">
                            <FaVideo className="phone-icon" />
                            <span className="income text-danger">missed</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Calls;