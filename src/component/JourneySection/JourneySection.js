export default function JourneySection() {
  return (
    <section className="v0-desktop-journey-section">
      <h2 className="v0-desktop-section-title">Book Your Ride in 4 Steps</h2>
      <div className="v0-desktop-steps-container">
        <div className="v0-desktop-step">
          <div className="v0-desktop-step-circle">1</div>
          <h3>Enter Pickup</h3>
          <p>Tell us where you are</p>
        </div>
        <div className="v0-desktop-step-arrow">→</div>
        <div className="v0-desktop-step">
          <div className="v0-desktop-step-circle">2</div>
          <h3>Choose Destination</h3>
          <p>Where do you want to go?</p>
        </div>
        <div className="v0-desktop-step-arrow">→</div>
        <div className="v0-desktop-step">
          <div className="v0-desktop-step-circle">3</div>
          <h3>Select Car</h3>
          <p>Pick your preferred vehicle</p>
        </div>
        <div className="v0-desktop-step-arrow">→</div>
        <div className="v0-desktop-step">
          <div className="v0-desktop-step-circle">4</div>
          <h3>Ride & Enjoy</h3>
          <p>Sit back and relax</p>
        </div>
      </div>
    </section>
  );
}
