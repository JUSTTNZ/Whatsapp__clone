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
      <ul>
        {messages.map((message) => (
          <UserMessage
            key={message.id}
            message={message.message}
            status={message.status}
            date={message.timestamp}
            content={message.content}
            picture={message.picture}
            user={message.user}
            
          />
        ))}
      </ul>
    </div>
  );
};

export default DisplayMessages;
