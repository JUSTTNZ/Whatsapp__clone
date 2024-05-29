import React from "react";

const General =  () => {
    return(
        <div className="General-div">
   <h4>General</h4>
        <h5 className="mt-4">Login</h5>
        <div className="d-flex justify-content-between">
            <p>Start whatsapp at login</p>

        </div>
        <div>
            <h6 className="mt-1">Language</h6>

        </div>
        <div className="mt-4">
            <h6>Typing</h6>
            <p>Change typing settings for autocorrect <br/>
            and misspelled highlight from <a>Windom setting</a></p>
        </div>
        <div className="border-bottom"></div>
        <div className="mt-4">
            <p>To log out of whatsapp in this computer to go <a>Profile</a></p>
        </div>
        </div>
     
    )
}

export default General;