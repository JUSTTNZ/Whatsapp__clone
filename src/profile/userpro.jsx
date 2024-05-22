import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import '../css/userpro.css'


const UserPro = () => {
    const location = useLocation();
    const { state: { phoneNumber,name,file,image} } = location;
   console.log(image)
  
    return(
        <div className="container">
           <div className="user-profile-container">
      <div className="user-profile-header">
        <img src={image} alt="User profile" className="user-profile-picture" />
       </div>
    

       <div className="username-container">
       <h2 className="user-profile-name">{name}</h2>
      
            <i className="user-profile-pencil-icon"></i>✏
       </div>
      <div className="about-header">
      <h3>About</h3>
      </div>
        <div className="user-about">
      
         <input type="text" name="about" className="about-input" />
        
            <i className="user-profile-about-icon"></i>✏
           
         
        </div>
      <div className="user-profile-info">
        <label className="user-profile-label">Phone Number</label>
        <h3 className="user-profile-data">{phoneNumber}  </h3>
      </div>
      <div className="border-bottom mt-4"></div>
      <div className="user-profile-footer">
        <button className="user-profile-logout-btn">Log Out</button>
      </div>
    </div>
        </div>
    )
}
export default UserPro