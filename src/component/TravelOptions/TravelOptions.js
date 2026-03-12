export default function TravelOptions() {
  const options = [
    { title: 'Ride Now', icon: '⚡', desc: 'Book instantly for immediate travel' },
    { title: 'Schedule Ahead', icon: '📅', desc: 'Plan your journey in advance' },
    { title: 'Corporate Fleet', icon: '🏢', desc: 'Solutions for business needs' }
  ];

  return (
    <section className="v0-desktop-travel-options">
      <h2 className="v0-desktop-section-title">Your Travel, Your Way</h2>
      <div className="v0-desktop-options-grid">
        {options.map((opt, i) => (
          <div key={i} className="v0-desktop-option-card">
            <div className="v0-desktop-option-icon">{opt.icon}</div>
            <h3>{opt.title}</h3>
            <p>{opt.desc}</p>
            <a href="#" className="v0-desktop-option-link">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
