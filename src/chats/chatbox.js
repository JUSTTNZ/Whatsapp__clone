import React, { useState } from 'react';
import DisplayMessages from './DisplayMessages'; 
import NewChats from './NewChats'; 
import Tag from './Tag'; 
import FilterChat from './FilterChat'; 

const ChatBox = ({ messages, sortedBy }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('searching for', searchValue); 
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
