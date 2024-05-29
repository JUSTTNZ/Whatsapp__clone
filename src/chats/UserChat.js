import React,{useState} from 'react'
import '../css/UserChat.css'
// import WhatsappLogo from '../../src/assets/whatsapp clone chat images/4375153_logo_whatsapp_icon.png'
// import Burgermenu from '../../src/assets/whatsapp clone chat images/6351903_burger_list_menu_navigation_icon.png'
// import CallPhone from '../../src/assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
// import StatusViewer from '../../src/assets/whatsapp clone chat images/9032198_whatsapp status_status_whatsapp_application_mobile_icon.png'
// import Messages from '../../src/assets/whatsapp clone chat images/9042672_message_icon.png'
// import Archive from '../../src/assets/whatsapp clone chat images/8541693_archive_box_icon.png'
// import Settings from '../../src/assets/whatsapp clone chat images/2849830_multimedia_options_setting_settings_gear_icon.png'
// import Star from '../../src/assets/whatsapp clone chat images/430117_star_icon.png'
// import NewChats from '../../src/assets/whatsapp clone chat images/9104159_write_compose_pencil_edit_message_icon.png'
// import Tag from '../../src/assets/whatsapp clone chat images/9025893_tag_simple_icon.png'
// import FilterChat from '../../src/assets/whatsapp clone chat images/9040443_filter_icon.png'
// import UserMessage from './UserMessage'

// import messages from './UserTextData'
// import DisplayMessages from './DisplayMessages'
import Header from './header'
import Sidebar from './sidebar'
import ChatBox from './chatbox'
import ChatHolder from './chatholder'
import displayStatus from '../status/displayStatus'
import Display from '../status/Display'
import Calls from '../call/Calls'

const UserChat = () => {
  
  const [displayComponent, setDisplayComponent] = useState('usermessage'); // track which component to display

    // Function to handle button click inside Sidebar
    const handlePage = (component) => {
        setDisplayComponent(component);
    };
  return (    

   <div className='head'>
     <Header />
    <div className=""> 
    <div className="row">
    <div className="col-1 ">
    <Sidebar currentPage={handlePage} />
    </div>
    <div className="col-3 ">
    {/* <ChatBox /> */}
    {displayComponent === 'usermessage' && <ChatBox/>} {/* Display UserMessage if selected */}
     {displayComponent === 'userstatus' && <Display />} {/* Display UserStatus if selected */}
     {displayComponent === 'Phone' && <Calls /> } 
    </div>
    <div className="col-8 border">
    <ChatHolder />
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default UserChat
