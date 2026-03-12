import "./Footer.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer-container">

      <div className="footer-logo-wrapper">
        <Image src="/logo.png" alt="Yatri Cabs" width={120} height={40}/>
      </div>

      <div className="footer-links-container">
        <a className="footer-link">Home</a>
        <a className="footer-link">About</a>
        <a className="footer-link">Services</a>
        <a className="footer-link">Career</a>
        <a className="footer-link">Contact</a>
        <a className="footer-link">Privacy Policy</a>
        <a className="footer-link">Terms & Condition</a>
      </div>

      <p className="footer-copyright-text">
        All Copyrights are reserved by YATRI CABS
      </p>

    </footer>
  );
};

export default Footer;