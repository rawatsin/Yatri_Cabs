import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  name: "",
  email: "",
  phone: "",
  profileImage: "",
  bookingHistory: [],
  savedLocations: [],
  preferences: {
    carType: "economy",
    paymentMethod: "card",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.profileImage = action.payload.profileImage || "";
    },
    logout: (state) => {
      return initialState;
    },
    updateProfile: (state, action) => {
      state.name = action.payload.name || state.name;
      state.email = action.payload.email || state.email;
      state.phone = action.payload.phone || state.phone;
      state.profileImage = action.payload.profileImage || state.profileImage;
    },
    addBookingToHistory: (state, action) => {
      state.bookingHistory.push(action.payload);
    },
    setSavedLocations: (state, action) => {
      state.savedLocations = action.payload;
    },
    addSavedLocation: (state, action) => {
      state.savedLocations.push(action.payload);
    },
    setPreferences: (state, action) => {
      state.preferences = { ...state.preferences, ...action.payload };
    },
  },
});

export const {
  login,
  logout,
  updateProfile,
  addBookingToHistory,
  setSavedLocations,
  addSavedLocation,
  setPreferences,
} = userSlice.actions;

export default userSlice.reducer;
