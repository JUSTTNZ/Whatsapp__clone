import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './profile/Signup';
import NumberAuth from './profile/NumberAuth';
import './App.css';
import Privacy from './links/Privacy';
import Terms from './links/Terms';
import VerifyOtp from './profile/verify';
// <<<<<<< features
// =======
import UserStatus from './status/statusBox'

// >>>>>>> main
import GetUser from './profile/GetUser';

import displayStatus from './status/displayStatus'


import UserChat from './chats/UserChat';
import Display from './status/Display';

const App = () => {
 
  return (
    <div className='app'>
      <Router>
      <Routes>
        <Route path='/' element={<Signup /> } />
        <Route path='/number_auth' element={<NumberAuth />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />

     <Route path='/get-user' element={<GetUser />} />
     <Route path='/user-chat' element={<UserChat/>}/>
     <Route path='/user-status' element={<UserStatus/>}/>
     <Route path='/display' element={<Display />}/>

      

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
