import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('jwtToken');
  //   if (!token) {
  //     // Redirect to login page if no token is found
  //     navigate('/login');
  //   } else {
  //     // Optionally, verify token with backend or just allow access
  //     setIsAuthenticated(true);
  //   }
  // }, [navigate]);

  return (
    <>
    <Header/>
    <div className="flex justify-center items-center my-20 mx-10">
      
    {/* First Card */}
    <div className="flex-1 p-8 max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <img
        src="/path-to-your-image1.jpg"
        alt="icon"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">Create Meeting</h2>
      <p className="text-gray-600 text-center mt-2">
        Create a new meeting and invite people.
      </p>
      <Link
      to="/create"
      >
      <button
        
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Go to Create
      </button>
      </Link>
    </div>

    {/* Repeat for other cards */}
    <div className="flex-1 p-8 max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow mx-4">
      <img
        src="/path-to-your-image2.jpg"
        alt="icon"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">Join Meeting</h2>
      <p className="text-gray-600 text-center mt-2">
        Join an existing meeting using the invite link.
      </p>
      <Link to={'/join'}>
      <button
        
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Go to Join
      </button></Link>
     
    </div>

    <div className="flex-1 p-8 max-w-xs bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow mx-4">
      <img
        src="/path-to-your-image3.jpg"
        alt="icon"
        className="w-20 h-20 mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold text-center">View Meetings</h2>
      <p className="text-gray-600 text-center mt-2">
        View all your scheduled meetings.
      </p>
      <Link to={"/view"}>
      <button
        className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Go to View
      </button>
      </Link>
      
    </div>
  </div>
  </>
  ) ;
};

export default Dashboard;
