import "./WhyYatri.css";
import Image from "next/image";

const WhyYatri = () => {
  return (
    <section className="whyYatriSection">
      <div className="whyYatriContainer">

        <h2 className="whyYatriTitle">
          WHY <span className="whyYatriTitleHighlight">YATRI</span> ?
        </h2>

        <div className="whyYatriGrid">

          <div className="whyYatriCarSection">
            <Image
              src="/WhyYatri.png"
              alt="Yatri Car"
              width={550}
              height={350}
              className="whyYatriCarImage"
            />
          </div>

          <div className="whyYatriFeatures">

            <div className="whyYatriFeatureItem">
              <Image src="/paid.png" alt="" width={40} height={40} className="whyYatriFeatureIcon"/>
              <div className="whyYatriFeatureContent">
                <h3 className="whyYatriFeatureTitle">FAST RESPONSE TIME</h3>
                <p className="whyYatriFeatureText">
                  Experience The Best Car Rental Service With Driver For Local Or
                  Outstation Trips. Enjoy Prompt Response Times And Seamless Car
                  Hire Service, Ensuring You Get On The Road Quickly
                </p>
              </div>
            </div>

            <div className="whyYatriFeatureItem">
              <Image src="/paid.png" alt="" width={40} height={40} className="whyYatriFeatureIcon"/>
              <div className="whyYatriFeatureContent">
                <h3 className="whyYatriFeatureTitle">VAST FLEET</h3>
                <p className="whyYatriFeatureText">
                  We Offer A Wide Range Of Rental Cars Including Sedans, SUVs,
                  MUVs, Premium Sedans, And Tempo Travellers To Meet All Your
                  Car Hire Needs.
                </p>
              </div>
            </div>

            <div className="whyYatriFeatureItem">
              <Image src="/paid.png" alt="" width={40} height={40} className="whyYatriFeatureIcon"/>
              <div className="whyYatriFeatureContent">
                <h3 className="whyYatriFeatureTitle">EASY TO ORDER</h3>
                <p className="whyYatriFeatureText">
                  Easily Book A Cab Online Through Our User-Friendly Website,
                  Mobile Application, Or By Calling Our Customer Support Team.
                </p>
              </div>
            </div>

            <div className="whyYatriFeatureItem">
              <Image src="/paid.png" alt="" width={40} height={40} className="whyYatriFeatureIcon"/>
              <div className="whyYatriFeatureContent">
                <h3 className="whyYatriFeatureTitle">GREAT TARIFFS</h3>
                <p className="whyYatriFeatureText">
                  Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly
                  Competitive Compared To Other Operators.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYatri;