import React, {useState} from "react";
import Burgermenu from '../../src/assets/whatsapp clone chat images/6351903_burger_list_menu_navigation_icon.png'
import CallPhone from '../../src/assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
import StatusViewer from '../../src/assets/whatsapp clone chat images/9032198_whatsapp status_status_whatsapp_application_mobile_icon.png'
import Messages from '../../src/assets/whatsapp clone chat images/9042672_message_icon.png'
import Archive from '../../src/assets/whatsapp clone chat images/8541693_archive_box_icon.png'
import Settings from '../../src/assets/whatsapp clone chat images/2849830_multimedia_options_setting_settings_gear_icon.png'
import Star from '../../src/assets/whatsapp clone chat images/430117_star_icon.png'
import '../css/UserChat.css'
import UserChat from "./UserChat";
import UserStatus from "../status/statusBox"

const Sidebar = () =>{
    const [currentPage, setCurrentPage] = useState('null')
    const handleSideOptions = ({Burgermenu,Messages,CallPhone,StatusViewer}) => {
        currentPage({Burgermenu,Messages,CallPhone,StatusViewer});
    }
    const renderPage = () => {
        switch(currentPage) {
            case 'Burgermenu':
                return <UserChat/>
            
            case 'Messages':
                return <UserChat/>

            case 'Cellphone':
                return <UserChat/>

            case 'StatusViewer':
                return <UserStatus/>

            default :
            return null
        }

    }
    return (
        <aside className='aside'>  
        <div className='side-icons'>
            <div className='upper-side-icons'>
                <img src={Burgermenu} alt='' onClick={() => setCurrentPage('Burgermenu')}/>
                <img src={Messages} alt='' onClick={() => setCurrentPage('Messages')  }/>
                <img src={CallPhone} alt='' onClick={() => setCurrentPage('CallPhone')  }/>
                <img src={StatusViewer} alt='' onClick={() => setCurrentPage('StatusViewer')}/>
                renderPage={renderPage}
                handleSideOptions={handleSideOptions}
            </div>
            <div className='lower-side-icons'>
                <img src={Star} alt=''/>
                <img src={Archive} alt=''/>
                <img src={Settings} alt=''/>
                {/* <img src={mainImg} alt="profile-pic" className="profile-pic" /> */}
            </div>
        </div>
      </aside>
    )
}

export default Sidebar;