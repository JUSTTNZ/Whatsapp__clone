import React from 'react'
import '../css/UserChat.css'
import WhatsappLogo from '../../src/assets/whatsapp clone chat images/4375153_logo_whatsapp_icon.png'
import Burgermenu from '../../src/assets/whatsapp clone chat images/6351903_burger_list_menu_navigation_icon.png'
import CallPhone from '../../src/assets/whatsapp clone chat images/8201367_video_calling_recording_ui_film_icon.png'
import StatusViewer from '../../src/assets/whatsapp clone chat images/9032198_whatsapp status_status_whatsapp_application_mobile_icon.png'
import Messages from '../../src/assets/whatsapp clone chat images/9042672_message_icon.png'
import Archive from '../../src/assets/whatsapp clone chat images/8541693_archive_box_icon.png'
import Settings from '../../src/assets/whatsapp clone chat images/2849830_multimedia_options_setting_settings_gear_icon.png'
import Star from '../../src/assets/whatsapp clone chat images/430117_star_icon.png'
import NewChats from '../../src/assets/whatsapp clone chat images/9104159_write_compose_pencil_edit_message_icon.png'
import Tag from '../../src/assets/whatsapp clone chat images/9025893_tag_simple_icon.png'
import FilterChat from '../../src/assets/whatsapp clone chat images/9040443_filter_icon.png'




const UserChat = () => {
  return (
    <div>
      <div className='logo'>
            <img className='whatsappLogo' src={WhatsappLogo} alt=''/>
            <p className='whatsapp'>WhatsApp</p>
      </div>
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
            </div>
        </div>
      </aside>
      <div className='chat-option'>
          <div className='header'>
              <h2>Chats</h2>
              <div className='header-icons'>
                <img src={NewChats} alt=''/>
                <img src={Tag} alt=''/>
                <img src={FilterChat} alt=''/>
              </div>
          </div>
          <div className='search-container'>
          <form className='search-form'>
              <input 
                type='text'
                className='search-input'
                placeholder='search or start a new chat'
              />
          </form>
          </div>
          <div>
              <div className='message-data'>
                

              </div>
          </div>
          
      </div>
    </div>
  )
}

export default UserChat
