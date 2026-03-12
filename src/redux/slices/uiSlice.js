import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  notification: {
    show: false,
    message: "",
    type: "info",
  },
  modals: {
    loginModal: false,
    bookingConfirmModal: false,
    paymentModal: false,
  },
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = {
        show: true,
        message: action.payload.message,
        type: action.payload.type || "info",
      };
    },
    hideNotification: (state) => {
      state.notification.show = false;
    },
    openModal: (state, action) => {
      const modalName = action.payload;
      if (state.modals[modalName] !== undefined) {
        state.modals[modalName] = true;
      }
    },
    closeModal: (state, action) => {
      const modalName = action.payload;
      if (state.modals[modalName] !== undefined) {
        state.modals[modalName] = false;
      }
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setLoading,
  showNotification,
  hideNotification,
  openModal,
  closeModal,
  setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;
