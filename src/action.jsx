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