import React, { useState } from "react"
import { FaSun } from "react-icons/fa";
import { useSelector } from "react-redux";
import { setDarkMode } from "../action";
import { useDispatch } from "react-redux";
import { SiElectron } from "react-icons/si";
import { FaMoon } from "react-icons/fa";
import { width } from "@mui/system";
import { SetWallpaper } from "../action";
const Wallpaper = () => {
  const [select, setSelect] = useState()
    const dispatch = useDispatch();
    const darkmode = useSelector((state) => state.darkmode);
    const toggleDark = () =>{
        dispatch(setDarkMode(true));
        
    }
    const togglelight = () =>{
      dispatch(setDarkMode(false));
      
  }

      const click = (e) => {
        const value = e.target.value
        if (value == "dark"){
        
      toggleDark();
        } else {
          if (value == "light"){
       
        togglelight()
          }
        }
      }
      const icon = {

        color : "#000",
        border:"2px",
        // backgroundColor:"red",
        height:"60px",
        width:"60px",
        borderRadius: "10px"
        
      }
      // const colors = [
      //   blackColor = {
      //      backgroundColor : "black"
      //   },
      //   bluecolor = {
      //     backgroundColor : "blue"
          
      //   }
      // ]
      // const reedColor = () => {
      //   dispatch(SetWallpaper(true))
      // }
      const handleColorChange = (color) => {
        dispatch(SetWallpaper(color));
      };
    
    return(
        
        <div className="wallpaper-div">
          
    
           <h5>Personalization</h5>

           <h6 className="mt-4">Theme</h6>
           <p>App color theme</p>
           <div >
           
         
            <select id="" value={select} className="" onChange={click}>
           <option value={"default"}>System default</option>
              <option value={"light"}><FaSun /> Light </option>
              <option value={"dark"}><FaMoon /> Dark</option>
           
            </select>
           </div>
           <div className="">
           <h6 className="mt-2">Chat wallpaper</h6>
           <div className="row">
            <div className="red border col-md-3 m-1 bg-danger " style={icon} >
               
            </div>
            <div className="blue border col-md-3 m-1 bg-primary" style={icon} >
               
            </div>
            <div className="yellow border col-md-3 m-1 bg-secondary" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1 bg-success" style={icon}  >
               
               </div>
               <div className="yellow border col-md-3 m-1 bg-info" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1 bg-warning" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1 b" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1 bg-warning" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
               <div className="yellow border col-md-3 m-1" style={icon} >
               
               </div>
           </div>
           </div>
          
        </div>
       
        
    )

}

export default Wallpaper;