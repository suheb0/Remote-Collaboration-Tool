import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { setUser } from '../app/slices/AuthSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode'; // Notice: No curly braces
// import {authSlice} from '../app/slices/AuthSlice'



const CLIENT_ID = '500980884746-pmbtka925mio2j246jp81j60ihmd91il.apps.googleusercontent.com';
// const dispatch = useDispatch()
const Login = () => {
  const dispatch = useDispatch()
  const userName = useSelector(state=>state.auth.userInfo.name)
  const onSuccess = (response) => {
    console.log('Response:', response);
    const token = response.credential;

    fetch('http://localhost:5000/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    })

      .then(res => res.json())
      .then(data => {
        const uid = nanoid()
        localStorage.setItem('jwtToken', data.token);
        const decoded = jwtDecode(token);
           console.log("Decoded Token:", decoded);
        // console.log('data.token',data.token)
        const inppp = { uid, email: decoded.email, name: decoded.name }
        dispatch(setUser(inppp));
         console.log("username",userName)

        
        window.location.href = '/dashboard';
      })
      .catch(err => console.log('Error:', err));
  };

  const onFailure = (error) => {
    console.log('Login failed:', error);
  };

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div
        className="flex justify-center items-center min-h-screen bg-gray-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Sign in with Google</h2>

          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={onSuccess}
              onError={onFailure}
              useOneTap
              type="standard"
              shape="rectangular"
              theme="filled_blue" // Change the theme to filled_blue for better aesthetics
              size="large"
              text="continue_with" // Change the button text for better context
              style={{ 
                width: '100%', // Make the button full width
                padding: '12px 20px', // Adjust padding for the button
                borderRadius: '8px', // Make the button more rounded
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)' // Add a subtle shadow
              }}
            />
            {/* {console.log('UserInfo',userInfo)} */}
            { console.log("username",userName)}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
   
  );
};

export default Login;
