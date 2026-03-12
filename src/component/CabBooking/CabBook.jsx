"use client"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTripType, setTripMode, setFromCity, setToCity, setPickupDate } from "@/redux/slices/tripSlice";
import "./cabbook.css";

export default function CabBook() {
  const dispatch = useDispatch();
  const tripType = useSelector((state) => state.trip.tripType);
  const tripMode = useSelector((state) => state.trip.tripMode);
  const fromCity = useSelector((state) => state.trip.fromCity);
  const toCity = useSelector((state) => state.trip.toCity);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/cities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ country: "India" })
    })
      .then(res => res.json())
      .then(data => {
        setCities(data.data.slice(0, 200));
      });
  }, []);

  return (
    <div className="cab-booking-container">

      {/* Tabs */}
      <div className="cab-booking-tabs">
        <button
          className={`cab-booking-tab-button ${tripType === "outstation" ? "active" : ""}`}
          onClick={() => dispatch(setTripType("outstation"))}
        >
          Outstation
        </button>

        <button
          className={`cab-booking-tab-button ${tripType === "local" ? "active" : ""}`}
          onClick={() => dispatch(setTripType("local"))}
        >
          Local
        </button>

        <button
          className={`cab-booking-tab-button ${tripType === "airport" ? "active" : ""}`}
          onClick={() => dispatch(setTripType("airport"))}
        >
          Airport
        </button>
      </div>

      <hr className="cab-booking-divider" />

      {tripType === "outstation" && (
        <div className="cab-booking-trip-mode">
          <label className="cab-booking-radio-label">
            <input
              type="radio"
              checked={tripMode === "oneway"}
              onChange={() => dispatch(setTripMode("oneway"))}
            />
            One Way
          </label>

          <label className="cab-booking-radio-label">
            <input
              type="radio"
              checked={tripMode === "round"}
              onChange={() => dispatch(setTripMode("round"))}
            />
            Round Trip
          </label>
        </div>
      )}

      <div className="cab-booking-form-grid">

        <div className="cab-booking-form-field">
          <label className="cab-booking-form-label">FROM</label>
          <select
            className="cab-booking-form-select"
            value={fromCity}
            onChange={(e) => dispatch(setFromCity(e.target.value))}
          >
            <option>Select City</option>
            {cities.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="cab-booking-form-field">
          <label className="cab-booking-form-label">TO</label>
          <select
            className="cab-booking-form-select"
            value={toCity}
            onChange={(e) => dispatch(setToCity(e.target.value))}
          >
            <option>Select City</option>
            {cities.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="cab-booking-form-field">
          <label className="cab-booking-form-label">Pickup Date</label>
          <input 
            className="cab-booking-form-input"
            type="date"
            onChange={(e) => dispatch(setPickupDate(e.target.value))}
          />
        </div>

        <div className="cab-booking-form-field">
          <label className="cab-booking-form-label">Pickup Time</label>
          <input 
            className="cab-booking-form-input"
            type="time" 
          />
        </div>

      </div>

      <button className="cab-booking-submit-button">EXPLORE CABS</button>

    </div>
  );
}