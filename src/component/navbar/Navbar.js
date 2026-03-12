export default function Navbar() {
  return (
    <nav className="v0-desktop-navbar">
      <div className="v0-desktop-navbar-container">
        <div className="v0-desktop-logo">🚖 Yatri Cabs</div>
        <ul className="v0-desktop-nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="v0-desktop-btn-nav">Book Now</button>
      </div>
    </nav>
  );
}
