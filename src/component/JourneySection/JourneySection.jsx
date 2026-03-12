import "./JourneySection.css";
import Image from "next/image";

const JourneySection = () => {
  return (
    <section className="journeySection">
      <div className="journeyContainer">

        {/* LEFT TEXT */}
        <div className="journeyTextContainer">
          <h2 className="journeyTitle">
            WHY CHOOSE AC BUS OR AC TRAIN <br />
            FOR YOUR <span className="journeyTitleHighlight">ONE-WAY JOURNEY?</span>
          </h2>

          <p className="journeyDescription">
            Our Oneway Car Rental Service Is Cheaper Than AC Bus And 2-Tier AC
            Train Ticket Fares. It Reduces Your Travel Time, And You Travel In
            Your Own Private Space, Allowing You To Fully Enjoy Your Journey.
            Our One Way Taxi Will Come To Your Doorstep And Take You To Your
            Desired Destination. So, Book Your Cheapest One Way Cab From
            Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable
            Oneway Car Rental Service With Driver. Experience The Convenience
            Of Our Taxi Service, Where You Can Rent A Car Effortlessly And
            Enjoy Seamless Cab Booking. Choose Our Car Hire Option For A
            Hassle-Free And Comfortable Travel Experience. We Offer Outstation
            Cab And Intercity Travel Services, Ensuring A Smooth And Enjoyable
            Luxury Ride Wherever You Need To Go.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="journeyImageContainer">
          <Image
            src="/image_processing20200705-14536-p3d6n5 1.png"
            alt="One Way Taxi Illustration"
            width={520}
            height={380}
            className="journeyImage"
          />
        </div>

      </div>
    </section>
  );
};

export default JourneySection;