export default function FeaturesStrip() {
  const features = [
    { icon: '✓', title: 'Safe & Secure', desc: 'Verified drivers & 24/7 support' },
    { icon: '₹', title: 'Best Prices', desc: 'Transparent billing, no hidden charges' },
    { icon: '⏱', title: 'On-Time', desc: 'GPS tracked & real-time updates' }
  ];

  return (
    <section className="v0-desktop-features-strip">
      <div className="v0-desktop-features-grid">
        {features.map((feature, i) => (
          <div key={i} className="v0-desktop-feature-box">
            <div className="v0-desktop-feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
