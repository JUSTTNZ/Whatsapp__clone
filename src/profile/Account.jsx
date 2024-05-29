import React from "react"

const Account = () => {
    return(
        <div className="Account-div">
    <h5>Account</h5>
    <div >
    <h6 className="mt-2">Privacy</h6>
    <p className="italic-p">Managed on your phone</p>
    </div>
   <div>
   <p className="last-seen">Last seen and online</p>
    <h6>Nobody</h6>
    <p>if you dont share your last seen<br/>
    you wont be able to see other people last seen</p>
   </div>
    <div>
    <p className="last-seen">Profile Photo</p>
    <h6>Nobody</h6>
    </div>
  <div>
  <p className="last-seen">About</p>
    <h6>Everyone</h6>
  </div>
  <div>
  <p className="last-seen">Add to groups</p>
    <h6>My Contacts</h6>
  </div>
  <div>
  <p className="last-seen">Read receipts</p>
    <h6>On</h6>
  </div>
    
    <div className="border-bottom"></div>
        </div>
    )
}
export default Account;