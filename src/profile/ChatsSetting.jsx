import React from "react";
import { FaLaptop } from "react-icons/fa";
const ChatsSettings = () =>{
    return(
        <div className="chat-div" >
<h4>Chats</h4>
<h5 className="mt-4">Chats History</h5>
<FaLaptop className="" /> Synced with your phone
<div className="archive-chats-div">Archive all chats</div>
<p>You will still receieve message from archived chats</p>
<div className="archive-chats-div">Clear all messages</div>
<p>Delete all messages from chats and groups</p>
<div className="archive-chats-div">clear all chats</div>
<p>Delete all messages and clear chats history</p>
        </div>
        
    )
}
export default ChatsSettings;