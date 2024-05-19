import React from "react";
import Burgermenu from '../../src/assets/whatsapp clone chat images/6351903_burger_list_menu_navigation_icon.png'
import CallPhone from '../../src/assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
import StatusViewer from '../../src/assets/whatsapp clone chat images/9032198_whatsapp status_status_whatsapp_application_mobile_icon.png'
import Messages from '../../src/assets/whatsapp clone chat images/9042672_message_icon.png'
import Archive from '../../src/assets/whatsapp clone chat images/8541693_archive_box_icon.png'
import Settings from '../../src/assets/whatsapp clone chat images/2849830_multimedia_options_setting_settings_gear_icon.png'
import Star from '../../src/assets/whatsapp clone chat images/430117_star_icon.png'
import '../css/UserChat.css'
import img1 from '../assets/pictures/user.jpg'
import { useLocation } from "react-router-dom";
const Sidebar = () =>{
    const location = useLocation();
    const { state: { phoneNumber,name,file,image} } = location;
    return (
        <aside className='aside'>  
        <div className='side-icons'>
            <div className='upper-side-icons'>
                <img src={Burgermenu} alt=''/>
                <img src={Messages} alt=''/>
                <img src={CallPhone} alt=''/>
                <img src={StatusViewer} alt=''/>
            </div>
            <div className='lower-side-icons'>
                <img src={Star} alt=''/>
                <img src={Archive} alt=''/>
                <img src={Settings} alt=''/>
                <img src={image} alt="profile-pic" className="profile-pic" />
            </div>
        </div>
      </aside>
    )
}

export default Sidebar;