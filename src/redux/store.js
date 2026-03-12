import { configureStore } from "@reduxjs/toolkit";
import tripReducer from "./slices/tripSlice";
import userReducer from "./slices/userSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    user: userReducer,
    ui: uiReducer,
  },
});
