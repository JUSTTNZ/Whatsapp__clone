import React from "react";
import '../css/UserMessage.css'
import UserTextData from './UserTextData'
import DisplayMessages from "./DisplayMessages";


const UserMessage = ({ message, status, date, content,picture,user }) => (
  <div>
      {/* <DisplayMessages messages={UserTextData.messages}  /> */}
  <li>
  <img src={picture}  className="chat-picture" />
  <p>{user}</p>
    <p>{message}</p>
    <p>Status: {status}</p>
    <p>Date: {new Date(date).toLocaleString()}</p>
    <p>{content}</p>
    
  </li>
  </div>

);

export default UserMessage

