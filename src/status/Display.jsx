import React from "react";
import UserStatus from "./userStatus";
import statusData from './statusData'
import '../css/status.css'
const Display = () => {

    return(
<div className="status-list">
  <div className="status-box">
  <div className="">
    <UserStatus  />
  </div>
<ul>
        {statusData.map((status,index) => (
     
        <div key={index} className="status-upload">
              
          <img src={status.picture} width={"100px"}  className="upload"/>
          <p>{status.sender}</p>
        </div>
    
          
        ))}
      </ul>
  </div>
 
</div>
    )
}
export default  Display;