import React, { useState, useEffect } from "react";
import '../css/UserMessage.css'
import { useParams } from "react-router-dom";
import messages from "./UserTextData";
import { SetMessage } from "../action";
import { useDispatch } from "react-redux";
import { setSender } from "../action";
import { setSenderPic } from "../action";
const UserMessage = ({ status, date, content, picture, sender }) => {
  const [newContent, setNewContent] = useState(content);
  const dispatch = useDispatch()
  useEffect(() => {
    const maxLength = 22; // Set your desired maximum length here
    if (content.length > maxLength) {
      setNewContent(content.substring(0, maxLength) + '...');
    }
  }, [content]);

 const handleDisplay = () => {
  dispatch(SetMessage(content))
  dispatch(setSender(sender))
  dispatch(setSenderPic(picture))
  
 }
  
  return (
    <div onClick={handleDisplay} className="message-container">
      <img src={picture} alt="User" className="user-image"/>
      <div className="message-content">
        <div className="sender-content">
          <p className="sender">{sender}</p>
          <p className="date">03:30 PM</p>
        </div>
        <div className="timestamp">
          <p className="content" >{newContent}</p>
          <p className="status">✓✓</p>
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
