// import { addDoc } from "firebase/firestore";
import moment from "moment";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAppSelector } from "../app/hooks";
import CreateMeetingButtons from "./CreateMeetingButtons";
import MeetingDateField from "./MeetingDateField";
import MeetingMaximumUsersField from "./MeetingMaximumUsersField";
import MeetingNameField from "./MeetingNameField";
import MeetingUserField from "./MeetingUserField";
// import Header from "../components/Header";
// import useAuth from "../hooks/useAuth";
// import useFetchUsers from "../hooks/useFetchUsers";
// import useToast from "../hooks/useToast";
// import { meetingsRef } from "../utils/firebaseConfig";
// import { generateMeetingID } from "../utils/generateMeetingId";
// import { FieldErrorType, UserType } from "../utils/types";

export default function VideoConference() {
  // useAuth();
  // const [users] = useFetchUsers();
  // const [createToast] = useToast();
  // const uid = useAppSelector((zoomApp) => zoomApp.auth.userInfo?.uid);
  const navigate = useNavigate();

  const [meetingName, setMeetingName] = useState("");
  const [selectedUser, setSelectedUser] = useState([]);
  const [startDate, setStartDate] = useState(moment());
  const [size, setSize] = useState(1);
  const [showErrors, setShowErrors] = useState({
    meetingName: {
      show: false,
      message: [],
    },
    meetingUsers: {
      show: false,
      message: [],
    },
  });
  const [anyoneCanJoin, setAnyoneCanJoin] = useState(false);

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
    if (!selectedUser.length && !anyoneCanJoin) {
      showErrorsClone.meetingUsers.show = true;
      showErrorsClone.meetingUsers.message = ["Please Select a User"];
      errors = true;
    } else {
      showErrorsClone.meetingUsers.show = false;
      showErrorsClone.meetingUsers.message = [];
    }
    setShowErrors(showErrorsClone);
    return errors;
  };

  const createMeeting = async () => {
    if (!validateForm()) {
      const meetingId = generateMeetingID();
      await addDoc(meetingsRef, {
        createdBy: uid,
        meetingId,
        meetingName,
        meetingType: anyoneCanJoin ? "anyone-can-join" : "video-conference",
        invitedUsers: anyoneCanJoin
          ? []
          : selectedUser.map((user) => user.uid),
        meetingDate: startDate.format("L"),
        maxUsers: anyoneCanJoin ? 100 : size,
        status: true,
      });
      createToast({
        title: anyoneCanJoin
          ? "Anyone can join meeting created successfully"
          : "Video Conference created successfully.",
        type: "success",
      });
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* <Header /> */}
      <div className="flex justify-center items-center">
        <form className="space-y-4 w-full max-w-lg">
          {/* Anyone Can Join Switch */}
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={anyoneCanJoin}
              onChange={(e) => setAnyoneCanJoin(e.target.checked)}
              className="mr-2"
            />
            <label className="text-sm font-medium">Anyone Can Join</label>
          </div>

          {/* Meeting Name Field */}
          <MeetingNameField
            label="Meeting Name"
            isInvalid={showErrors.meetingName.show}
            error={showErrors.meetingName.message}
            placeholder="Meeting name"
            value={meetingName}
            setMeetingName={setMeetingName}
          />

          {/* Conditional Field based on 'anyoneCanJoin' */}
          {anyoneCanJoin ? (
            <MeetingMaximumUsersField value={size} setSize={setSize} />
          ) : 
          // (
            // <MeetingUserField
            //   label="Invite Users"
            //   isInvalid={showErrors.meetingUsers.show}
            //   error={showErrors.meetingUsers.message}
            //   // options={users}
            //   onChange={onUserChange}
            //   // selectedOptions={selectedUser}
            //   isClearable={false}
            //   placeholder="Select a Users"
            // />
          // )
          // }

          {/* Meeting Date Field */}
          // <MeetingDateField selected={startDate} setStartDate={setStartDate} />
        }
          {/* Spacer */}
          <div className="py-4" />

          {/* Create Meeting Buttons */}
          <CreateMeetingButtons createMeeting={createMeeting} />
        </form>
      </div>
    </div>
  );
}
