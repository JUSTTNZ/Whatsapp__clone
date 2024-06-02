
import React,{useState} from "react";

import Burgermenu from '../../src/assets/whatsapp clone chat images/6351903_burger_list_menu_navigation_icon.png'
import CallPhone from '../../src/assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
import StatusViewer from '../../src/assets/whatsapp clone chat images/9032198_whatsapp status_status_whatsapp_application_mobile_icon.png'
import Messages from '../../src/assets/whatsapp clone chat images/9042672_message_icon.png'
import Archive from '../../src/assets/whatsapp clone chat images/8541693_archive_box_icon.png'
import Settings from '../../src/assets/whatsapp clone chat images/2849830_multimedia_options_setting_settings_gear_icon.png'
import Star from '../../src/assets/whatsapp clone chat images/430117_star_icon.png'


import '../css/sidebar.css'
import { FaCamera, FaUser, FaComments, FaVideo, FaBell, FaDatabase, FaQuestionCircle, FaCog } from 'react-icons/fa';
import DisplayProfile from "../profile/DisplayProfile";

// import img1 from '../assets/pictures/user.jpg'
// import { useLocation } from "react-router-dom";
import UserChat from "./UserChat";

import userStatus from "../status/userStatus";
import Img1 from "../assets/pictures/user.jpg"
import Storage from "../profile/Storage";
import ChatsSettings from "../profile/ChatsSetting";
import Account from "../profile/Account";
import General from "../profile/General";
import Display from "../status/Display";
import Notify from "../profile/Notification";
const Sidebar = ({currentPage}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // const [currentPage, setCurrentPage] = useState('null');

//   const handleSideOptions = ({Burgermenu,Messages,CallPhone,StatusViewer}) => {
//     currentPage({Burgermenu,Messages,CallPhone,StatusViewer});
// }
    const handleItemClick = (title) => {
      setSelectedItem(title);
    };
  
    const renderContent = () => {
      switch (selectedItem) {
        case 'General':
          return <General />
          case 'Profile':
            return <DisplayProfile />
            case 'Storage':
              return <Storage />
             case 'Chats':
              return <ChatsSettings />
              case 'Account':
                return <Account />
              case "Notification":
                return  <Notify />
        default:
          return null;
      }
    };

  //   const renderPage = () => {
  //     switch(currentPage) {
  //         case 'Burgermenu':
  //             return <UserChat/>
          
  //         case 'Messages':
  //             return <UserChat/>

  //         case 'Cellphone':
  //             return <UserChat/>

  //         case 'StatusViewer':
  //             return <Display />

  //         default :
  //         return null
  //     }

  // }
  
  
  return (
<aside className='aside'>  
    <div className='side-icons'>
    <div className='upper-side-icons'>
                <img src={Burgermenu} alt='' className="pointer-icon" onClick={() => currentPage('usermessage')}/>
                <img src={Messages} alt=''  className="pointer-icon"  onClick={() => currentPage('usermessage')}/>
                <img src={CallPhone} alt='' className="pointer-icon" onClick={() => currentPage('Phone')  }/>
                <img src={StatusViewer} alt='' className="pointer-icon" onClick={() => currentPage('userstatus')}/>
                {/* renderPage={renderPage}
                handleSideOptions={handleSideOptions} */}
                
            </div>
      <div className='lower-side-icons '>
        <img src={Star} className="pointer-icon" alt=''/>
        <img src={Archive} className="pointer-icon" alt=''/>
        <div class="dropdown">
  <a class=" dropdown-toggle-no-caret" data-bs-toggle="dropdown" aria-expanded="false">
    <img src={Settings} alt="Settings Icon" className="pointer-icon"/>
  </a>

  <ul className="dropdown-menu">
      <div className="row">
        <div className="col-3 " onClick={(e) =>  e.stopPropagation()}>
        {/* e.stopPropagation() is called to prevent the event from bubbling up to the 
        Bootstrap dropdown component, thereby keeping it open when an item is clicked. */}
  
<li onClick={(e) =>{e.stopPropagation(); handleItemClick("General")}}>
  <a className="dropdown-item"><FaUser className="dropdown-menu-icon"/> General</a>
</li>
<li onClick={(e) =>{e.stopPropagation();  handleItemClick("Account")}}>
  <a className="dropdown-item"><FaComments className="dropdown-menu-icon"/> Account</a>
</li>
<li onClick={(e) => {e.stopPropagation();  handleItemClick("Chats")}}>
  <a className="dropdown-item"><FaCamera className="dropdown-menu-icon"/> Chats</a>
</li>
<li onClick={(e) => {e.stopPropagation();  handleItemClick("Video")}}>
  <a className="dropdown-item"><FaVideo className="dropdown-menu-icon"/> Video</a>
</li>
<li onClick={(e) =>{e.stopPropagation();  handleItemClick("Notification")}}>
  <a className="dropdown-item"><FaBell className="dropdown-menu-icon"/> Notification</a>
</li>
<li onClick={(e) =>{e.stopPropagation();  handleItemClick("Storage")}}>
  <a className="dropdown-item"><FaDatabase className="dropdown-menu-icon"/> Storage</a>
</li>
<li onClick={(e) =>{e.stopPropagation();  handleItemClick("Help")}}>
  <a className="dropdown-item"><FaQuestionCircle className="dropdown-menu-icon"/> Help</a>
</li>
<li onClick={(e) =>{e.stopPropagation();  handleItemClick("Profile")}}>
  <a className="dropdown-item mt-5 down-pro"><FaCog className="dropdown-menu-icon"/> Profile</a>
</li>

        </div>
        <div className="col-1">
          <div className="vertical-line"></div>
        </div>
        <div className="col-8 content-div" onClick={(e) =>  e.stopPropagation()}>
          {renderContent()}



    
        
      </div>
      </div>
    </ul>
</div>
      </div>
    </div>
  </aside>
  )
  
  
};

export default Sidebar;
