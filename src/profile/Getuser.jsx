import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../css/getuser.css'
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { setName } from "../action";
import { useDispatch } from "react-redux";
import { setImages } from "../action";
const GetUser = (
) => {
 
  const navigate = useNavigate()

  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [name, setUsername] = useState("")
  const dispatch = useDispatch()

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
         console.log(file)
    reader.onloadend = (imageUrl) => {
      setImage(file);
      setPreview(imageUrl.target.result);
      console.log(file)
      dispatch(setImages(imageUrl.target.result))
    };

    reader.readAsDataURL(file);
    
  };


const handlenamechange = (e) => {
    setUsername(e.target.value)
    dispatch(setName(e.target.value));
}
const NextButton = async () => {
  if (preview && name){
 
 setUsername(name)
 console.log(name)
 navigate("/user-chat")
  } else {
    alert("Add image and name to continue")
  }
     
}

  return (
    <div>
   <div className="container">
  <div className="profile-container">
    <h5>Profile info</h5>
    <h5 className="profile-info">Please provide your name and an optional photo</h5>
    <div className="profile-image-container">
      <label className="profile-image-upload" htmlFor="upload-file">
        {preview ? (
          <img src={preview} alt="Profile Preview" className="profile-image" />
        ) : (
          <div className="camera-icon-cont" >
          <FaCamera className="camera-icon" />
        </div>
        )}
        <input
          type="file"
          name="file"
          accept="image/*"
          id="upload-file"
          onChange={handleImage}
          style={{ display: 'none' }}
        />
      </label>
    </div>


    <div className="profile-input">
      
      <input
        type="text"
        id="name-input"
        placeholder="Type your name here"
        value={name}
        onChange={handlenamechange}
      />
      <span className="emoji-icon">😊</span>
      
     
    </div>
    <button className="next-button btn btn-sm btn-secondary" onClick={NextButton}>Next</button>
  </div>
</div>

    
  </div>
  
  );
};

export default GetUser;
