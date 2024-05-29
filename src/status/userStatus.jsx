import React from 'react'
import '../css/status.css'
import userProfile from '../assets/whatsapp clone chat images/user_profile.jpg'
const userStatus = ({picture,sender}) => {
  return (
    <>
      <div>
        <span>Status</span>
        <div>
            <img src={userProfile} alt=''userProfile />
            <p>My status</p>
            <p>No updates</p>
        </div>
        <span>Recent updates</span>
      </div>
      <div className='status'>
        <div className='status-upload'>
            {/* <img className='status-image' alt='status-upload'>{picture}</img> */}
            <img src={picture} width={'100px'} />
        </div>
        <div>
            <p>{sender}</p>
            <p>Today, 4:24 PM</p>
        </div>
      </div>
    </>
  )
}

export default userStatus
