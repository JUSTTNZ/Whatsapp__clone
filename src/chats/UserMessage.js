import React from "react";
import '../css/UserMessage.css'



const UserMessage = ({ message, status, date, content,picture,sender }) => (
  <div>
      {/* <DisplayMessages messages={UserTextData.messages}  /> */}
  <li>
    <img src={picture} alt={picture} className="chat-picture" />
    <div className="chat-preview">
    <p className="sender">{sender}</p>
    {/* <p className="message">{message}</p> */}
    <p className="content">{content}</p>
    </div>
    <div className="timestamp">
    <p className="date">{new Date(date).toLocaleString()}</p>
    <p className="status"> {status}</p>
    </div>
  </li>
  </div>

);

export default UserMessage

