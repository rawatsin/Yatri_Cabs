import "./WhyOneWay.css";
import Image from "next/image";

const WhyOneWay = () => {
  return (
    <section className="onewaySection">
      <div className="onewayContainer">

        <h2 className="onewayTitle">WHY CHOOSE ONE WAY CAB?</h2>

        <div className="onewayGrid">

         
          <div className="onewayInfoBox">
            <ul className="onewayList">
              <li className="onewayListItem">Instant Booking & Confirmation</li>
              <li className="onewayListItem">Confirmed Booking Immediately</li>
              <li className="onewayListItem">No Return Fare For One-Way Trip</li>
              <li className="onewayListItem">Clean & Professional Cab Services</li>
              <li className="onewayListItem">
                Transparent Billing With GPS Based Billing System
              </li>
            </ul>
          </div>

          
          <div className="onewayCenterImage">
            <Image
              src="/d43c11d76c7db33af616426597e88833 2.png"
              alt="One way cab"
              width={320}
              height={180}
              className="onewayImage"
            />
          </div>

         
          <div className="onewayInfoBox">
            <ul className="onewayList">
              <li className="onewayListItem">Pick-Up From Your House</li>
              <li className="onewayListItem">Dedicated Cab Just For You</li>
              <li className="onewayListItem">Drop To Your Desired Destination</li>
              <li className="onewayListItem">
                Completed More Than 20,000+ Oneway Trips
              </li>
              <li className="onewayListItem">
                Multiple Payment Option Including Credit Card
              </li>
            </ul>
          </div>

        </div>

     

        <p className="onewayBottomText">
          DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS
          <span className="onewayBottomHighlight"> INTERCITY CAR RENTAL </span>
          IN INDIA – WHERE EXCELLENCE MEETS AFFORDABILITY WITH
          STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
        </p>

      </div>
    </section>
  );
};

export default WhyOneWay;