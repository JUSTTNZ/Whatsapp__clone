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
            <div className='user-options'>
              <p>My status</p>
              <p>No updates</p>
            </div>
        </div>
        <span className='span'>Recent updates</span>
        
      </div>
      <div className='status'>
        <div className='status-upload'>
            {/* <img className='status-image' alt='status-upload'>{picture}</img> */}
            <img src={picture} alt=""   className='upload'/>
            <p className='names'>{sender}</p>
        </div>
      </div>
    </>
  )
}

export default userStatus
