export const setName = (name) => ({
    type: "SET_NAME",
    name: name,
   
   })
   
   export const setNumber = (Number) => ({
       type : "SET_PHONE_NUMBER",
       Number: Number,
   })
   
   export const setImages = (image) => ({
       type : "SET_IMAGE",
       payload: image
   })

   export const setCode = (code) => ({
    type : "SET_CODE",
    payload: code
   })

   export const SetMessage = (mes) => ({
    type: "SET_MESSAGE",
    payload: mes
   })

   export const setSender = (send) => ({
    type: "SET_SENDER",
    payload: send
   })
   
   export const setSenderPic = (sendPic) => ({
    type: "SET_SENDER_PIC",
    payload: sendPic
   })

   export const setDarkMode = (dark) => ({
    type : "SET_DARK_MODE",
    payload: dark
   })