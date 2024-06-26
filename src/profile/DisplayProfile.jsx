import React from "react";
import Img1 from "../assets/pictures/user.jpg"
import { useSelector } from "react-redux";
const DisplayProfile = () => {
   const name = useSelector((state) => state.name)
   const number = useSelector((state) => state.Number)
   const image = useSelector((state) => state.image);
    return(
        <div className="profile-div">
             
        <div className="user-img-circle">
<img src={image} alt="User profile" className="user-profile-pictures" />
</div>
< div className="d-flex justify-content-between">
<h2 className="user-profile-name">{name}</h2>

   <i className="user-profile-pencil-icon"></i>✏
</div>
<div className="">
<h3 className="about-head">About</h3>
</div>
<div className="user-about">


{/* <textarea name="message" id="comment" > </textarea> */}
<p>I'm fine</p>

   <i className="user-profile-about-icon"></i>✏
  

</div>
<div className="">
<label className="user-profile-label">Phone Number</label>
<h3 className="user-profile-data">{number}</h3>
</div>
<hr/>
<div className="user-profile-footer">
<button className="user-profile-logout-btn">Log Out</button>
<p>chats history on this computer will be cleared when you log out</p>
</div>
      </div>
    )
}

export default DisplayProfile;