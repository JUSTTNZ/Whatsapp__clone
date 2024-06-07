import React, { useState } from "react"

const Notify = () => {

    return(
        
       <div className="notify-div">
        <h5>Notification</h5>
        <p>Show banner notification</p>
      
        <select>
          <option value="">Always</option>
          <option value="" className="border-bottom">Never</option>
          <div className="border-top mt-4"></div>
          <option value="" className="border-top m-4">Only when app is open</option>
        </select>
          <div>
            <p>Show taskbar notification</p>
            <select>
          <option value="">Always</option>
          <option value="" className="border-bottom">Never</option>
          <div className="border-top mt-4"></div>
          <option value="" className="border-top m-4">Only when app is open</option>
        </select>
          </div>
          {/* <div className="border-top mt-3">
            <div className="d-flex justify-content-between">
              <h6>Message</h6>

            </div>

          </div> */}
       </div>

       
        
    )

}

export default Notify;