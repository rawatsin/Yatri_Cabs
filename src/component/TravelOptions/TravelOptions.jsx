import "./TravelOptions.css";
import Image from "next/image";

const TravelOptions = () => {
  return (
    <section className="travelOptions">
      <div className="travelContainer">

        <div className="option">
          <Image
            src="/Group 1686551997.png"
            alt="Budget"
            width={70}
            height={70}
          />
          <h3>For Any Budget</h3>
          <p>
            Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini
            Buses Like Tempo Travellers 12-Seater To 25-Seater To Find A Ride
            Within Your Budget And At Your Convenience With Our Car Rental
            And Cab Service Options.
          </p>
        </div>

        <div className="option">
          <Image
            src="/Group 1686551997.png"
            alt="Distance"
            width={70}
            height={70}
          />
          <h3>For Any Distance</h3>
          <p>
            Book Daily Rides With Multiple Stops Within The City Or Travel To
            Your Favourite Destinations Across The Country With Our Oneway Or
            Round Trip Outstation Cab Service. Enjoy Seamless Cab Booking
            For All Your Travel Needs.
          </p>
        </div>

        <div className="option">
          <Image
            src="/Group 1686551997.png"
            alt="Duration"
            width={70}
            height={70}
          />
          <h3>For Any Duration</h3>
          <p>
            Plan A Day Out With Our Hourly-Based Packages For Local City
            Tours Or Book Our Car Rental Services With A Driver For Long
            Or Multiple-Day Trips. Our Taxi Service Ensures Reliable
            Transportation Tailored To Your Car Hire Needs.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TravelOptions;