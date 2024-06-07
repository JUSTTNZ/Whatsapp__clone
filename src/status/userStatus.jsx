import React from 'react'
import '../css/status.css'
import userProfile from '../assets/whatsapp clone chat images/user_profile.jpg'
const userStatus = ({picture,sender}) => {
  return (
    <>
      <div className='user-status'>
        <span className='header'>Status</span>
        <div className='user'>
            <img src={userProfile} alt=''/>
            <p>My status</p>
            <p>No updates</p>
        </div>
        <span>Recent updates</span>
      </div>
      <div className='status'>
        <div className='status-upload'>
            {/* <img className='status-image' alt='status-upload'>{picture}</img> */}
            <img src={picture} alt="" width={'20px'} />
        </div>
        <div>
            <p>{sender}</p>
            {/* <p>Today, 4:24 PM</p> */}
        </div>
      </div>
    </>
  )
}

export default userStatus
