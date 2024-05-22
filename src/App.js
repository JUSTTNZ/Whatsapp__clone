import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './profile/Signup';
import NumberAuth from './profile/NumberAuth';
import './App.css';
import Privacy from './links/Privacy';
import Terms from './links/Terms';
import VerifyOtp from './profile/verify';


import GetUser from './profile/GetUser';




import UserChat from './chats/UserChat';

const App = () => {
 
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Signup /> } />
        <Route path='/number_auth' element={<NumberAuth />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/verify-otp' element={<VerifyOtp />} />

     <Route path='/get-user' element={<GetUser />} />
     <Route path='/user-chat' element={<UserChat/>}/>
     

      

      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
