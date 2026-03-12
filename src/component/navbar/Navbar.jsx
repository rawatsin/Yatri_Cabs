import "./Navbar.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="ycNavbar">

      <div className="ycNavbarLogo">
        <Image
          className="ycNavbarLogoImg"
          src="/logo.png"
          alt="YatriCabs Logo"
          width={150}
          height={40}
        />
      </div>

      <div className="ycNavbarCenterContact">
        <Image
          className="ycNavbarCenterContactImg"
          src="/IMAGES/centerLogo.png"
          alt="24/7 contact"
          width={250}
          height={45}
        />
      </div>

      <div className="ycNavbarRightSection">
        <Image
          className="ycNavbarDownloadIcon"
          src="/downloadApp.png"
          alt="download"
          width={75}
          height={45}
        />

        <div className="ycNavbarUserBox">
          <div className="ycNavbarUserAvatar">
            <Image
              className="ycNavbarUserAvatarImg"
              src="/profileCircle.png"
              alt="profile"
              width={36}
              height={36}
            />
          </div>

          <span className="ycNavbarUserText">Hi, Ravi</span>
        </div>
      </div>

    </nav>
  );
}