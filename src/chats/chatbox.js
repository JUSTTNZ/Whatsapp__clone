import React from "react";
import '../css/UserChat.css'
import DisplayMessages from './DisplayMessages'
import messages from './UserTextData'
import NewChats from '../../src/assets/whatsapp clone chat images/9104159_write_compose_pencil_edit_message_icon.png'
import Tag from '../../src/assets/whatsapp clone chat images/9025893_tag_simple_icon.png'
import FilterChat from '../../src/assets/whatsapp clone chat images/9040443_filter_icon.png'
import '../css/chatbox.css'
import { useState } from "react";

const ChatBox = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleValue = () => { 
    console.log("searching for", searchValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleValue()
  }

  const filteredNames = () => {
    messages.
  }
return(
    <div className='chat-option'>
      <div className='header'>
        <h5>Chats</h5>
        <div className='header-icons'>
          <img src={NewChats} alt='' />
          <img src={Tag} alt='' />
          <img src={FilterChat} alt='' />
        </div>
      </div>
      <div className='search-container'>
        <form className='search-form' onSubmit={handleSubmit}>
        
          <input
            type='text'
            className='search-input'
            placeholder='search or start a new chat'
            value={searchValue}
            onChange={handleChange}
          />
        </form>
      </div>
    
      <div>
        <div className='message-data'>
          {/* <UserMessage messages={messages}/> */}
          <DisplayMessages messages={messages} />
        </div>
      </div>
  </div>
  
)
}

export default ChatBox;