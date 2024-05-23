import React from "react";
import WhatsappLogo from '../../src/assets/whatsapp clone chat images/4375153_logo_whatsapp_icon.png'
import '../css/UserChat.css'
const Header = () => {
    return(
          <div className='logo header-top'>
            <img className='whatsappLogo' src={WhatsappLogo} alt=''/>
            <p className='whatsapp'>WhatsApp</p>
      </div> 
    )
}

export default Header;