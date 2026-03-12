import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar-container">

      <div className="navbar-logo">
        <Image
          src="/logo.png"
          alt="YatriCabs Logo"
          width={150}
          height={40}
        />
      </div>

      <div className="navbar-contact-bar">
        <Image
          src="/IMAGES/centerLogo.png"
          alt="24/7 contact"
          width={250}
          height={45}
        />
      </div>

      <div className="navbar-icons-container">
        <Image
          className="navbar-download-icon"
          src="/downloadApp.png"
          alt="download"
          width={45}
          height={45}
        />

        <div className="navbar-user-section">
          <div className="navbar-user-avatar">
            <Image
              src="/profileCircle.png"
              alt="profile"
              width={36}
              height={36}
            />
          </div>
          <span className="navbar-user-greeting">Hi, Ravi</span>
        </div>
      </div>

    </nav>
  );
}