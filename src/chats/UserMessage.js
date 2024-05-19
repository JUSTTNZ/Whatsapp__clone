import React from "react";
import '../css/UserMessage.css'
import UserTextData from './UserTextData'
import DisplayMessages from "./DisplayMessages";


const UserMessage = ({ message, status, date, content }) => (
  <div>
      <DisplayMessages messages={UserTextData.messages} />
  <li>
    <p>{message}</p>
    <p>Status: {status}</p>
    <p>Date: {new Date(date).toLocaleString()}</p>
    <p>{content}</p>
  </li>
  </div>

);

export default UserMessage

