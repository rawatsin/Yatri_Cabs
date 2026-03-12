export default function RentalBenefits() {
  const benefits = [
    { title: 'Flexible Plans', desc: 'Hourly, daily, or monthly' },
    { title: 'Full Insurance', desc: 'Comprehensive coverage included' },
    { title: 'Free Cancellation', desc: '1 hour before pickup' },
    { title: 'Best Rates', desc: 'Price match guarantee' }
  ];

  return (
    <section className="v0-desktop-rental-benefits">
      <h2 className="v0-desktop-section-title">Long-term Rental Benefits</h2>
      <div className="v0-desktop-benefits-grid">
        {benefits.map((benefit, i) => (
          <div key={i} className="v0-desktop-benefit-card">
            <div className="v0-desktop-benefit-icon">✔</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
