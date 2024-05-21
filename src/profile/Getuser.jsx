import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import '../css/getUser.css'
// import axios from "axios";
import { useNavigate } from "react-router-dom";
const GetUser = (
) => {
  const location = useLocation();
  const navigate = useNavigate()
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
      console.log(file)
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
const handleNameChange = (e) => {
    setUsername(e.target.value)
}
const getName = async () => {
      // Convert the image file to Base64 string
      const base64Image = await convertImageToBase64(image);
    setUsername(name)
    console.log(name)
    navigate("/user-chat",{state:{phoneNumber,name,image: base64Image}})
}
const convertImageToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};
  return (
    <div>
   <div className="container">
  <div className="profile-container">
    <h5>Profile info</h5>
    <h5 className="profile-info">Please provide your name and an optional photo</h5>
    <div className="profile-image-container">
      <label
        class="profile-image-upload"
        htmlFor="upload-file"
        onChange={handleImage}
      >
        <img
          src={preview}
          alt=""
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
        onChange={handleNameChange}
      />
      <span className="emoji-icon">😊</span>
    </div>
    <button className="next-button btn btn-sm btn-secondary" onClick={getName}>Next</button>
  </div>
</div>

    
  </div>
  
  );
};

export default GetUser;
