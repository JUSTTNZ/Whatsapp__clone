import React from "react";
import '../css/UserMessage.css'
// import { useState } from "react";
import MessageData from './UserTextData';

const UserMessage = () => {
  return (
    <>
      <div className="chat-message">
          {MessageData.messages.map(message =>
            <div key={message.id}>
                <div>
                    <img src={message.picture} alt={message.sender} className="picture"/>
                </div>
                <div className="chat-header">
                    <span className="message-sender">{message.sender}</span>
                    <span className="time-stamp">{new Date(message.timestamp * 1000).toLocaleString()}</span>
                </div>
                <div className="message-content">
                    <p>{message.content}</p>
                    <span className="message.status">{message.status}</span>
                </div>
            </div>     
          )}
      </div>
    </>
  )
}

export default UserMessage
