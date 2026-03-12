import "./FeaturesStrip.css";
import Image from "next/image";

const FeaturesStrip = () => {
  return (
    <section className="features-strip-container">
      <div className="features-strip-grid">

        {/* Feature 1 */}
        <div className="features-strip-item">
          <Image
            src="/Group 1000001863.png"
            alt="Return Fare"
            width={80}
            height={80}
          />

          <h3 className="features-strip-item-title">RETURN FARE, NOT FAIR!</h3>

          <p className="features-strip-item-text">
            Why Pay For Return Journey When You Are Travelling Oneway? Now Get
            Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One
            Way Travel.
          </p>
        </div>

        {/* Divider */}
        <div className="features-strip-divider" />

        {/* Feature 2 */}
        <div className="features-strip-item">
          <Image
            src="/Group 1686551829.png"
            alt="GPS Billing"
            width={80}
            height={80}
          />

          <h3 className="features-strip-item-title">GPS BASED BILLING SYSTEM</h3>

          <p className="features-strip-item-text">
            Since The GPS Data Captures The Actual Distance And Time Travelled,
            It Reduce The Chance Of Kilometer Tampering Or Discrepancies In
            Billing.
          </p>
        </div>

        {/* Divider */}
        <div className="features-strip-divider" />

        {/* Feature 3 */}
        <div className="features-strip-item">
          <Image
            src="/driving.png"
            alt="Routes"
            width={80}
            height={80}
          />

          <h3 className="features-strip-item-title">NOW AVAILABLE ROUTES ARE!</h3>

          <p className="features-strip-item-text">
            Lucknow | Gorakhpur | Varanasi <br />
            | Ayodhya | Allahabad | Bareilly
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesStrip;