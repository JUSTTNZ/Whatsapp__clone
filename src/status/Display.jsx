import React from "react";
import UserStatus from "./userStatus";
import statusData from './statusData'
const Display = () => {

    return(
<div className="status-list">
<ul>
        {statusData.map((status) => (
        <UserStatus
          picture={status.picture}
          
          sender={status.sender}
          
        />
        ))}
      </ul>
</div>
    )
}
export default  Display;