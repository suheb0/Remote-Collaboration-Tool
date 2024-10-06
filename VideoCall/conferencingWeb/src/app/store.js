import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/AuthSlice";
// import { meetingsSlice } from "./slices/MeetingSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    // meetings: meetingsSlice.reducer,
  },
});

