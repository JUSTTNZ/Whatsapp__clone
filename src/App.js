import React, {useState} from 'react';
import { Route, Routes} from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import NumberAuth from './pages/Signup/NumberAuth/NumberAuth';
import './App.css';
// import Privacy from './links/Privacy.html'
// import Terms from './links/Terms and Service..html'

const App = () => {

  const [numberauth, setNumberAuth] = useState(true);
  return (
    <div>
      <Signup setSignup={setNumberAuth}/>
      <Routes>
        {/* <Route path='/' element={< ={numberauth}/>}/> */}

      </Routes>
    </div>
  );
}

export default App;
