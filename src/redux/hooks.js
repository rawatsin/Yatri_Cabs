import { useDispatch, useSelector } from "react-redux";

export const useTrip = () => useSelector((state) => state.trip);
export const useTripType = () => useSelector((state) => state.trip.tripType);
export const useTripMode = () => useSelector((state) => state.trip.tripMode);
export const useBookingDetails = () => useSelector((state) => ({
  fromCity: state.trip.fromCity,
  toCity: state.trip.toCity,
  passengers: state.trip.passengers,
  pickupDate: state.trip.pickupDate,
  dropoffDate: state.trip.dropoffDate,
  fare: state.trip.fare,
  bookingStatus: state.trip.bookingStatus,
}));

export const useUser = () => useSelector((state) => state.user);
export const useIsLoggedIn = () => useSelector((state) => state.user.isLoggedIn);
export const useUserProfile = () => useSelector((state) => ({
  name: state.user.name,
  email: state.user.email,
  phone: state.user.phone,
  profileImage: state.user.profileImage,
}));
export const useUserPreferences = () => useSelector((state) => state.user.preferences);

export const useUI = () => useSelector((state) => state.ui);
export const useIsLoading = () => useSelector((state) => state.ui.isLoading);
export const useNotification = () => useSelector((state) => state.ui.notification);
export const useModals = () => useSelector((state) => state.ui.modals);
export const useTheme = () => useSelector((state) => state.ui.theme);

export const useAppDispatch = () => useDispatch();
