export default function ExploreSection() {
  const cities = [
    { city: 'Delhi', routes: '50+ routes' },
    { city: 'Mumbai', routes: '45+ routes' },
    { city: 'Bangalore', routes: '40+ routes' },
    { city: 'Pune', routes: '35+ routes' },
    { city: 'Hyderabad', routes: '38+ routes' },
    { city: 'Chennai', routes: '32+ routes' }
  ];

  return (
    <section className="v0-desktop-explore-section">
      <h2 className="v0-desktop-section-title">Available in Your City</h2>
      <div className="v0-desktop-cities-grid">
        {cities.map((item, i) => (
          <div key={i} className="v0-desktop-city-card">
            <h3>{item.city}</h3>
            <p>{item.routes}</p>
            <button className="v0-desktop-btn-micro">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}
