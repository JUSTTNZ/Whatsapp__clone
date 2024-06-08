import React,{useState,useEffect} from "react";
import '../css/UserChat.css'
import DisplayMessages from './DisplayMessages'
import messages from './UserTextData'
import NewChats from '../../src/assets/whatsapp clone chat images/9104159_write_compose_pencil_edit_message_icon.png'
import Tag from '../../src/assets/whatsapp clone chat images/9025893_tag_simple_icon.png'
import FilterChat from '../../src/assets/whatsapp clone chat images/9040443_filter_icon.png'
const Chatbox = () => {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [searchError, setSearchError] = useState(false); 
 
return(
    <div className='chat-option'>
     <div className='header '>
      <h5>Chats</h5>
      <div className='header-icons'>
        <img src={NewChats} alt='' />
        <img src={Tag} alt='' />
        <img src={FilterChat} alt='' />
      </div>
    </div>

     <div className='search-container mt-5 mb-3'>
      <form className='search-form'>
        <input
          type='text'
          className='search-input'
          placeholder='search or start a new chat'
          value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}
           onKeyDown={(e) => {
           
               }}
        />
      </form>
    </div>
  
      <div className='message-data mt-5'>
       
    <div className="message-box">
        <DisplayMessages messages={messages}
                        
                         searchQuery={searchQuery}
        />
      </div> 
    </div>
  </div>
  
)
}

export default Chatbox;