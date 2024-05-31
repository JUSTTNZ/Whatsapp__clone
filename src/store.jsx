import { configureStore } from '@reduxjs/toolkit';
const initialState = {
  Number: "",
  Code: "",
  otp: "",
  name:"",
  Image: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // ...
case "SET_PHONE_NUMBER":
      return {
        ...state,
        Number: action.Number
};
case "SET_NAME":
  return{
    ...state,
    name: action.name,
  }
  case "SET_IMAGE":
    return{
      ...state,
      image: action.payload
    };
    case "SET_CODE":
    return{
        ...state,
    Code: action.payload
    }
    
  default:
    return state
  
  }
};

const store = configureStore({reducer});

export default store;
