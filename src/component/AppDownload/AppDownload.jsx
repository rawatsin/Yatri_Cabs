import "./AppDownload.css";
import Image from "next/image";

const AppDownload = () => {
  return (
    <section className="app-download-section">
      <div className="app-download-container">

        <div className="app-download-left">

          <div className="app-download-phones">
            <Image src="/Group 1686552011.png" alt="phone" width={120} height={220}/>
            
          </div>

          <div className="app-download-text">
            <h2>
              GET YOUR <span className="app-download-text-highlight">YATRI CABS</span> APP NOW!
            </h2>

            <p>
              USE CODE <b>WELCOMEYATRI</b> AND GET FLAT 50% OFF*
              ON YOUR FIRST INTERCITY RIDE
            </p>

            <p className="app-download-label">Download Now!</p>

            <div className="app-download-buttons">
              <Image src="/image 6.png" alt="Google Play" width={140} height={40}/>
              <Image src="/image 7.png" alt="App Store" width={140} height={40}/>
            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="app-download-divider"></div>

        {/* RIGHT SIDE */}

        <div className="app-download-right">
          <h2>
            BECOME A <span className="app-download-text-highlight">DRIVER</span> PARTNER
          </h2>

          <p>
            Join <b>Yatri Car Rental</b> And Attach Your Car To Our Platform.
            Earn More By Serving Our Passengers And Benefit From Our
            Extensive Customer Base.
          </p>

          <button className="app-download-button">
            DOWNLOAD THE APP
          </button>
        </div>

      </div>

      {/* Cities */}

      <div className="cities">
        <strong>Operational Cities :</strong>

        <span>Lucknow</span>
        <span>Ayodhya</span>
        <span>Gorakhpur</span>
        <span>Varanasi</span>
        <span>Allahabad (Prayagraj)</span>
        <span>Kanpur</span>
      </div>

    </section>
  );
};

export default AppDownload;