import React, { useState } from 'react';
import '../css/UserChat.css'
import DisplayMessages from './DisplayMessages'
// import messages from './UserTextData'
// import message from './DisplayMessages'
import NewChats from '../../src/assets/whatsapp clone chat images/9104159_write_compose_pencil_edit_message_icon.png'
import Tag from '../../src/assets/whatsapp clone chat images/9025893_tag_simple_icon.png'
import FilterChat from '../../src/assets/whatsapp clone chat images/9040443_filter_icon.png'
import '../css/chatbox.css'

const ChatBox = ({ messages, sortedBy }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('searching for', searchValue); // Simplified logging
  };

  // Corrected filter function
  const filteredNames = messages.filter((message) => 
    message.sender.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Corrected sorting function
  const sortedNames = sortedBy
    ? [...filteredNames].sort((a, b) => {
        if (sortedBy === 'sender') {
          return a.sender.localeCompare(b.sender);
        }
        return 0;
      })
    : filteredNames;

  return (
    <div className='chat-option'>
      <div className='header'>
        <h5>Chats</h5>
        <div className='header-icons'>
          <img src={NewChats} alt='New Chats' />
          <img src={Tag} alt='Tag' />
          <img src={FilterChat} alt='Filter Chat' />
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
          <DisplayMessages messages={sortedNames} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
