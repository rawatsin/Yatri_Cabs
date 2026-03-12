export default function Services() {
  const services = [
    'Airport Transfers',
    'City Rides',
    'Outstation Travel',
    'Corporate Rentals',
    'Wedding Transportation',
    'Long-term Rentals'
  ];

  return (
    <section className="v0-desktop-services" id="services">
      <h2 className="v0-desktop-section-title">Our Services</h2>
      <div className="v0-desktop-services-grid">
        {services.map((service, i) => (
          <div key={i} className="v0-desktop-service-card">
            <div className="v0-desktop-card-icon">📍</div>
            <h3>{service}</h3>
            <p>Premium service tailored for you</p>
          </div>
        ))}
      </div>
    </section>
  );
}
