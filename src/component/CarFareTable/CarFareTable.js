export default function CarFareTable() {
  const fares = [
    { type: 'Economy', icon: '🚗', price: '₹5/km', desc: 'Budget-friendly option' },
    { type: 'Premium', icon: '🚙', price: '₹8/km', desc: 'Comfort & Style' },
    { type: 'Luxury', icon: '🚘', price: '₹12/km', desc: 'Premium experience' }
  ];

  return (
    <section className="v0-desktop-car-fare-table">
      <h2 className="v0-desktop-section-title">Our Fleet & Pricing</h2>
      <div className="v0-desktop-fare-grid">
        {fares.map((fare, i) => (
          <div key={i} className="v0-desktop-fare-card">
            <div className="v0-desktop-fare-icon">{fare.icon}</div>
            <h3>{fare.type}</h3>
            <p className="v0-desktop-fare-price">{fare.price}</p>
            <p className="v0-desktop-fare-desc">{fare.desc}</p>
            <button className="v0-desktop-btn-tertiary">Book Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
