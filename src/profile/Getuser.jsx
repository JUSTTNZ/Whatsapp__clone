import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../css/getuser.css'
// import axios from "axios";

const GetUser = (
) => {
  const location = useLocation();
  
  const { state: { phoneNumber } } = location;
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [name, setUsername] = useState("")

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = (imageUrl) => {
      setImage(file);
      setPreview(imageUrl.target.result);
    };

    reader.readAsDataURL(file);
  };

//   const handleAddImage = async (
// ) => {
//     const formData = new FormData();
//     formData.append("image", image);

//     axios.post("http://localhost:5174/get-user", formData).then((res) => {
//       console.log(res);
//     });
//   };
const handlenamechange = (e) => {
    setUsername(e.target.value)
}
const getName = () => {
    setUsername(name)
    console.log(name)
}
  return (
    <div>
   <div className="container">
  <div className="profile-container">
    <h5 className="profile-info">Please provide your name and an optional photo</h5>
    <div className="profile-image-container">
      <label
        class="profile-image-upload"
        htmlFor="upload-file"
        onChange={handleImage}
      >
        <img
          src={preview}
          alt="Your Name"
          class="profile-image"
        />
        <input type="file" name="file" accept="" id="upload-file" />
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
    <button className="next-button" onClick={getName}>Next</button>
  </div>
</div>

    
  </div>
  
  );
};

export default GetUser;
