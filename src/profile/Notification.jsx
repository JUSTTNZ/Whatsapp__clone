import React from "react"
import { FaSun } from "react-icons/fa";
const Notify = () => {
    return(
        <div className="">
             <h4>Ok</h4>
                <button
        className='nav-link '
        // onClick={toggleDarkMode}
      >
        {/* <FaFontAwesome faHome /> */}
        <FaSun />
        {/* <FontAwesomeIcon icon={darkMode ? faSun : faMoon}  className={`   ${darkMode ? 'text-white' : 'text-primary'}`}/> */}
      </button>
        </div>
       
        
    )

}

export default Notify;