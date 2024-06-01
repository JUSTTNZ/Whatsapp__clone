import React, { useState} from "react";
import "../css/chatholder.css"
import logo from "../assets/whatsapp clone chat images/4375153_logo_whatsapp_icon.png"
import img1 from '../assets/pictures/user.jpg'
import Video from '../assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
import { useSelector } from "react-redux";
const Chatholder = () => {
const [value , setValue] = useState("")
const [displaytext, setDisplayText] = useState([]);
const content = useSelector((state) => state.Message)
const Sender = useSelector((state) => state.Sender)
const picture = useSelector((state) => state.senderPic)
console.log(content)
const Text = (e) =>{
    setValue(e.target.value)
   
}
const enter = (e) => {
    if (e.key === 'Enter') {
        
        setDisplayText([...displaytext,value]);
        setValue('')
      
    }
}
if (!picture) {
    return <div className="loading-holder">
<div className="color">
<div class="log">
    <img src={logo} alt="WhatsApp Logo" />
  </div>
  <div class="windows">
    <h5>WhatsApp for Windows</h5>
  </div>
  <div class="foot">
    <span class="lock-icon">🔒</span>
    <span class="encrypted-text">End-to-end encrypted</span>
  </div>
</div>

    </div> 
}
else
    return(
<div class="chat-wrapper">
<header className="chat-holder">
<div class="left-header">
<img src={picture} class="user-image" alt="User Profile Image" />
<span class="username">{Sender}</span>
</div>
<div class="right-header">
<img src={Video} class="video-icon" alt="Video Icon" />
<img src={Video} class="call-icon" alt="Call Icon" />
<img src={Video} class="search-icon" alt="Search Icon" />
</div>
</header>
<div class="chat">

{/* <div class="message-holder">
<div class="sender-holder">
<p class="sender-text">
Good morning sir<br/>
Do u know any API I can use for sending verification code to phone numbers
            (phone number auth)
        </p>
<span class="time">09:30 AM</span>
</div>
</div> */}

<div className={`message-holder ${content ? '' : 'hidden'}`}>
<div class="sender-holder">
<p class="sender-text">
{content}
        </p>
<span class="time">09:30 AM</span>
</div>
</div>

{/* <div class="message-container receiver">
<div class="receiver-holder mr-auto">
<p class="receiver-text">never see ur code<br/>My I use my 15% debug light go come later</p>
<div className="d-flex justify-content-between time-container  ">
<span class="time time-rec mt-2">09:32 AM</span>
<div class="message-status ml-1">✓✓</div>
</div>

</div>
</div> */}


   
<div>
  {displaytext.map((displaytext, index) => (
    <div key={index} className={`message-container receiver ${displaytext ? '' : 'hidden'}`}>
      {displaytext && (
        <div className="receiver-holder mr-auto">
          <p className="receiver-text">{displaytext}</p>
          <div className="d-flex justify-content-between time-container">
            <span className="time time-rec mt-2">09:32 AM</span>
            <div className="message-status ml-1">✓✓</div>
          </div>
        </div>
      )}
    </div>
  ))}
</div>




{/* <div class="message-container receiver mb-2">
<div class="receiver-holder mr-auto">
<p class="receiver-text">never see ur code<br/>My I use my 15% debug light go come later {displaytext}</p>
<div className="d-flex justify-content-between time-container  ">
<span class="time time-rec mt-2">09:32 AM</span>
<div class="message-status ml-1">✓✓</div>
</div>

</div>
</div> */}

</div>
<div className="footer mt-2">
        <div class="message-input-wrapper d-flex justify-content-between">
            <div class="emoji-button">🤣</div>
            <div class="camera-button">📷</div>
           
            <input type="text" class="message-input" placeholder="Type your message..." onChange={Text} 
            onKeyDown={enter}
            
             value={value}
            />
            <div class="record-button">📷</div>
        </div>
    </div>
</div>

    )
}

export default Chatholder;