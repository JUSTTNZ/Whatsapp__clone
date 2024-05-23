import React from "react";
import UserMessage from "./UserMessage";

const DisplayMessages = ({ messages,searchQuery, handleSearch }) => {
  const filteredMessages = messages.filter(
    ({ sender, content }) => {
      if (
        sender &&
        sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content &&
        content.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return true;
      }
      return false;
    }
  );

  return (
    <div>
      <ul>
        {filteredMessages.map((message, index) => (
          
          <UserMessage
            key={index}
            message={message.message}
            status={message.status}
            date={message.timestamp}
            content={message.content}
            picture={message.picture}
            user={message.user}
            sender={message.sender}
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />
        ))}
      </ul>
    </div>
  );
};

export default DisplayMessages;