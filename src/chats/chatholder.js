import React from "react";
import "../css/chatholder.css"

import img1 from '../assets/pictures/user.jpg'
import Video from '../assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
const Chatholder = () => {
    return(
<div class="chat-wrapper">
<header>
<div class="left-header">
<img src={img1} class="user-image" alt="User Profile Image" />
<span class="username">Billie Dominic</span>
</div>
<div class="right-header">
<img src={Video} class="video-icon" alt="Video Icon" />
<img src={Video} class="call-icon" alt="Call Icon" />
<img src={Video} class="search-icon" alt="Search Icon" />
</div>
</header>
<div class="chat">

<div class="message-holder">
<div class="sender-holder">
<p class="sender-text">
Good morning sir<br/>
Do u know any API I can use for sending verification code to phone numbers
            (phone number auth)
        </p>
<span class="time">09:30 AM</span>
</div>
</div>



<div class="message-container receiver">
<div class="receiver-holder mr-auto">
<p class="receiver-text">never see ur code<br/>My I use my 15% debug light go come later</p>
<div className="d-flex justify-content-between time-container  ">
<span class="time time-rec mt-2">09:32 AM</span>
<div class="message-status ml-1">✓✓</div>
</div>

</div>
</div>
<div class="message-container receiver mb-2">
<div class="receiver-holder mr-auto">
<p class="receiver-text">never see ur code<br/>My I use my 15% debug light go come later</p>
<div className="d-flex justify-content-between time-container  ">
<span class="time time-rec mt-2">09:32 AM</span>
<div class="message-status ml-1">✓✓</div>
</div>

</div>
</div>

</div>
<div className="footer mt-2">
        <div class="message-input-wrapper d-flex justify-content-between">
            <div class="emoji-button">🤣</div>
            <div class="camera-button">📷</div>
           
            <input type="text" class="message-input" placeholder="Type your message..." />
            <div class="record-button">📷</div>
        </div>
    </div>
</div>

    )
}

export default Chatholder;