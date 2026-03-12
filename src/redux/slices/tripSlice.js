import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tripType: "outstation",
  tripMode: "oneway",
  fromCity: "",
  toCity: "",
  passengers: 1,
  pickupDate: "",
  dropoffDate: "",
  fare: 0,
  distance: 0,
  bookingId: null,
  bookingStatus: null,
};

const tripSlice = createSlice({
  name: "trip",
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload;
    },
    setTripMode: (state, action) => {
      state.tripMode = action.payload;
    },
    setFromCity: (state, action) => {
      state.fromCity = action.payload;
    },
    setToCity: (state, action) => {
      state.toCity = action.payload;
    },
    setPassengers: (state, action) => {
      state.passengers = action.payload;
    },
    setPickupDate: (state, action) => {
      state.pickupDate = action.payload;
    },
    setDropoffDate: (state, action) => {
      state.dropoffDate = action.payload;
    },
    setFare: (state, action) => {
      state.fare = action.payload;
    },
    setDistance: (state, action) => {
      state.distance = action.payload;
    },
    confirmBooking: (state, action) => {
      state.bookingId = action.payload.bookingId;
      state.bookingStatus = "confirmed";
    },
    resetTrip: (state) => {
      return initialState;
    },
  },
});

export const {
  setTripType,
  setTripMode,
  setFromCity,
  setToCity,
  setPassengers,
  setPickupDate,
  setDropoffDate,
  setFare,
  setDistance,
  confirmBooking,
  resetTrip,
} = tripSlice.actions;

export default tripSlice.reducer;
