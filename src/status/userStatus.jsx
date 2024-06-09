import React from 'react'
import '../css/status.css'
import userProfile from '../assets/whatsapp clone chat images/user_profile.jpg'
const userStatus = ({picture,sender}) => {
  return (
    <>
      <div className='user-status'>
     
        <div className='user'>
            <img src={userProfile} alt=''/>
            <div className='user-options'>
              <p>My status</p>
              <p>No updates</p>
            </div>
        </div>
        <span className='span'>Recent updates</span>
        
      </div>
      
    </>
  )
}

export default userStatus
S