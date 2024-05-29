import React from "react";

const Storage = () => {
    return(
<div className="storage-div">
    <h4 className="mt-1">Stroage</h4>
    <h5 className="mt-5">Automatic downloads</h5>
    <p>Choose which media will be automatically downloaded 
        from the message you receive</p>
        <div className="checkout-div">
    <label><input type="checkbox" /> Photos</label>
    <label><input type="checkbox" /> Videos</label>
    <label><input type="checkbox" /> Audio</label>
    <label><input type="checkbox" /> Document</label>
</div>

</div>
    )
}
export default Storage;