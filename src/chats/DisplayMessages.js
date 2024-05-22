import React from "react";
import UserMessage from "./UserMessage";
const DisplayMessages = ({ messages }) => {
  return (
    <div>
      
        {messages.map((message) => (
          <UserMessage
            key={message.id}
            content={message.content}
            message={message.message}
            picture={message.picture}
            sender={message.sender}
            date={message.timestamp}
            status={message.status}
          />
        ))}
    
    </div>
  );
};

export default DisplayMessages;
