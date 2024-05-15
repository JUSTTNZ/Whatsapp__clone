import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './profile/Signup';
import NumberAuth from './profile/NumberAuth';
import './App.css';
import Privacy from './links/Privacy';
import Terms from './links/Terms';
import VerifyOtp from './profile/verify';
// import Privacy from './links/Privacy.html'
// import Terms from './links/Terms and Service..html'

const App = () => {

  const [numberauth, setNumberAuth] = useState(true);
  return (
    <div>
{/*       
      <Signup /> */}
      <Router>
      <Routes>
        <Route path='/' element={<Signup /> } />
        <Route path='/number_auth' element={<NumberAuth />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />
      </Routes>
      </Router>
          </div>
  );
}

export default App;
