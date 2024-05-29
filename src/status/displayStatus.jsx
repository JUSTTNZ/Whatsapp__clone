import React from 'react'
import UserStatus from "./userStatus";
const displayStatus = ({statusData}) => {
  const filteredStatus = statusData.filter( 
    ({sender}) => {
      if (sender && sender.toLowerCase()) {
        return true;
      }
      return false;
    }
  )
  return (
    <div>
      <ul>
        {filteredStatus.map((statusDatum,index) => (
        <UserStatus
          key={index}
          picture={statusDatum.picture}
          sender={statusDatum.sender}
        />
        ))}
      </ul>
    </div>
  )
}

export default displayStatus
