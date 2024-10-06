import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import Main1v1 from "./Main1v1.jsx";

function CreateMeetingButtons({
  createMeeting,
  isEdit = false,
  closeFlyout,
}) {
  const navigate = useNavigate();
  const handleJoinRoom=useCallback(()=>{
    navigate("/Main1v1");
},[navigate])
  return (
    <>
   
    
    <div className="flex space-x-4">
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        onClick={() => (isEdit ? closeFlyout && closeFlyout() : navigate("/dashboard"))}
      >
        Cancel
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        type="submit"
        onClick={handleJoinRoom}
      >
        {isEdit ? "Edit Meeting" : "Create Meeting"}
      </button>
    </div>
    </>
  );
}

export default CreateMeetingButtons;
