// import React from 'react'
// import UserMessage from './UserMessage';


// const DisplayMessages = ({ messages }) => (
//     <div>
//       <ul>
//         {messages.map(message => (
//           <UserMessage
//             key={message.id}
//             message={message.message}
//             status={message.status}
//             date={message.timestamp}
//             content={message.content}
//           />
//         ))}
//       </ul>
//     </div>
//   );

  
//   export default DisplayMessages;

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
