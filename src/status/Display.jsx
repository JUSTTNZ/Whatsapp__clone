import React from "react";
import UserStatus from "./userStatus";
import statusData from './statusData'
const Display = () => {

    return(
<div className="status-list">
  <div className="">
    <UserStatus />
  </div>
<ul>
        {statusData.map((status,index) => (
     
        <div key={index}>
              
          <img src={status.picture} width={"100px"} />
          <p>{status.sender}</p>
        
        </div>
    
          
        ))}
      </ul>
</div>
    )
}
export default  Display;