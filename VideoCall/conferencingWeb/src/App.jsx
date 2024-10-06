import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'
import Dashboard from './components/DashBoard'
import ViewMeetings from './components/ViewMeeting'
import JoinMeeting from './components/JoinMeeting.jsx'
import CreateMeeting from './components/CreateMeeting'
import CreateMeeting1on1 from './components/CreateMeeting1on1.jsx'
import VideoConference from './components/VideoConference.jsx'
// import 
import { Routes,Route } from 'react-router-dom'
import Main1v1 from './components/Main1v1.jsx'
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <GoogleOAuthProvider clientId="500980884746-pmbtka925mio2j246jp81j60ihmd91il.apps.googleusercontent.com">
//      <Login/>

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<CreateMeeting />} />
        <Route path="/join" element={<JoinMeeting />} />
        <Route path="/view" element={<ViewMeetings />} />
        <Route path="/create1on1" element={<CreateMeeting1on1 />} />
        <Route path="/videoconference" element={<VideoConference />} />
        <Route path="/Main1v1" element={<Main1v1 />}/>
      </Routes>
    
  );
}
    //  </GoogleOAuthProvider>
    // </>
//   )
// }

export default App
