import AppDownload from "@/component/AppDownload/AppDownload.jsx";
import CarFareTable from "@/component/CarFareTable/CarFareTable.jsx";
import ExploreSection from "@/component/ExploreSection/ExploreSection.jsx";
import FeaturesStrip from "@/component/FeaturesStrip/FeaturesStrip.jsx";
import Footer from "@/component/Footer/Footer.jsx";
import Hero from "@/component/Hero/Hero.jsx";
import JourneySection from "@/component/JourneySection/JourneySection.jsx";
import Navbar from "@/component/navbar/Navbar.jsx";
import RentalBenefits from "@/component/RentalBenefits/RentalBenefits.jsx";
import Services from "@/component/Services/Services.jsx";
import Testimonials from "@/component/Testimonials/Testimonials.jsx";
import TravelOptions from "@/component/TravelOptions/TravelOptions.jsx";
import WhyOneWay from "@/component/WhyOneWay/WhyOneWay.jsx";
import WhyYatri from "@/component/WhyYatri/WhyYatri.jsx";
import { Explora } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FeaturesStrip/>
      <Services/>
      <WhyYatri/>
      <CarFareTable/>
      <JourneySection/>
      <RentalBenefits/>
      <WhyOneWay/>
      <ExploreSection/>
      <TravelOptions/>
      <Testimonials/>
      <AppDownload/>
      <Footer/>
    </div>
  );
}
