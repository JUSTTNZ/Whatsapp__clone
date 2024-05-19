import React from "react";
import "../css/chatholder.css"

import img1 from '../assets/pictures/user.jpg'
import Video from '../assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
const Chatholder = () => {
    return(
<div className="">
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

  </div>
</div>
    )
}

export default Chatholder;