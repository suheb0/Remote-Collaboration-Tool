import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
// import { useAuth, useFetchUsers, useToast } from "./hooks"; // Assuming these hooks are custom
// import { addDoc } from "firebase/firestore"; // Assuming Firestore is used for meetings
// import { useAppSelector } from "./app/hooks"; // Redux hook
import Header from "./Header"; // Your header component
import MeetingNameField from "./MeetingNameField"; // Custom meeting name input component
import MeetingUserField from "./MeetingUserField"; // Custom user selection component
import MeetingDateField from "./MeetingDateField"; // Custom date input component
import CreateMeetingButtons from "./CreateMeetingButtons"; // Custom buttons for create/cancel
// import { generateMeetingID, meetingsRef } from "./utils"; // Utility function for meeting IDs


export default function OneOnOneMeeting() {
  // useAuth();
  // const [users] = useFetchUsers();
  const [users] = ['Zaid','Khan','Umar'];
  // const [createToast] = useToast();
  // const uid = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.uid);
  
  const navigate = useNavigate();

  const [meetingName, setMeetingName] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [startDate, setStartDate] = useState(moment());
  const [showErrors, setShowErrors] = useState({
    meetingName: {
      show: false,
      message: [],
    },
    meetingUser: {
      show: false,
      message: [],
    },
  });

  const onUserChange = (selectedOptions) => {
    setSelectedUser(selectedOptions);
  };

  const validateForm = () => {
    const showErrorsClone = { ...showErrors };
    let errors = false;
    if (!meetingName.length) {
      showErrorsClone.meetingName.show = true;
      showErrorsClone.meetingName.message = ["Please Enter Meeting Name"];
      errors = true;
    } else {
      showErrorsClone.meetingName.show = false;
      showErrorsClone.meetingName.message = [];
    }
    if (!selectedUser.length) {
      showErrorsClone.meetingUser.show = true;
      showErrorsClone.meetingUser.message = ["Please Select a User"];
      errors = true;
    } else {
      showErrorsClone.meetingUser.show = false;
      showErrorsClone.meetingUser.message = [];
    }
    setShowErrors(showErrorsClone);
    return errors;
  };

  const createMeeting = async (e) => {
    e.preventDefault()
    if (!validateForm()) {
      const meetingId = generateMeetingID();
      await addDoc(meetingsRef, {
        // createdBy: uid,
        meetingId,
        meetingName,
        meetingType: "1-on-1",
        // invitedUsers: [selectedUser[0].uid],
        meetingDate: startDate.format("L"),
        maxUsers: 1,
        status: true,
      });
      // createToast({
      //   title: "One on One Meeting Created Successfully",
      //   type: "success",
      // });
      // navigate("/");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center items-center h-full">
        <form className="bg-white shadow-md p-8 rounded-lg w-full max-w-md">
          <MeetingNameField
            label="Meeting Name"
            isInvalid={showErrors.meetingName.show}
            error={showErrors.meetingName.message}
            placeholder="Meeting name"
            value={meetingName}
            setMeetingName={setMeetingName}
            className="mb-4"
          />
          {/* <MeetingUserField
            label="Invite User"
            isInvalid={showErrors.meetingUser.show}
            error={showErrors.meetingUser.message}
            // options={users}
            onChange={onUserChange}
            selectedOptions={selectedUser}
            singleSelection={{ asPlainText: true }}
            isClearable={false}
            placeholder="Select a User"
            className="mb-4"
          /> */}
          <MeetingDateField
            selected={startDate}
            setStartDate={setStartDate}
            className="mb-4"
          />
          <div className="flex justify-between">
            <CreateMeetingButtons createMeeting={createMeeting} />
          </div>
        </form>
      </div>
    </div>
  );
}
