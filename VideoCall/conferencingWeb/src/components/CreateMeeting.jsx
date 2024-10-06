import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Header from './Header';
// import meeting1 from './assets/meeting1.jpg';  // Replace with actual path
// import meeting2 from './assets/meeting2.jpg';  // Replace with actual path
import { Link } from 'react-router-dom';

const CreateMeeting = () => {


  return (
    <>
    <Header/>
    <div className="flex justify-center items-center my-20 mx-10"> {/* Flex container */}
      {/* First Card */}
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4">
        <img src={''} alt="Create 1 on 1 Meeting" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-lg font-semibold">Create 1 on 1 Meeting</h2>
          <p className="mt-2 text-gray-600">Create a personal single person meeting.</p>
          <Link to={"/Main1v1"}>
          <button
            
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Create Meeting
          </button>
          </Link>
          
        </div>
      </div>

      {/* Second Card */}
      <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-4">
        <img src={""} alt="Create Video Conference" className="w-full h-48 object-cover" />
        <div className="p-6">
          <h2 className="text-lg font-semibold">Create Video Conference</h2>
          <p className="mt-2 text-gray-600">Invite multiple persons to the meeting.</p>
          <Link to={'/videoconference'}>
          <button
            
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Start Conference
          </button>
          </Link>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateMeeting;
