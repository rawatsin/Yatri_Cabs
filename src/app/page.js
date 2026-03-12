import AppDownload from "@/component/AppDownload/AppDownload";
import CarFareTable from "@/component/CarFareTable/CarFareTable";
import ExploreSection from "@/component/ExploreSection/ExploreSection";
import FeaturesStrip from "@/component/FeaturesStrip/FeaturesStrip";
import Footer from "@/component/Footer/Footer";
import Hero from "@/component/Hero/Hero";
import JourneySection from "@/component/JourneySection/JourneySection";
import Navbar from "@/component/navbar/Navbar";
import RentalBenefits from "@/component/RentalBenefits/RentalBenefits";
import Services from "@/component/Services/Services";
import Testimonials from "@/component/Testimonials/Testimonials";
import TravelOptions from "@/component/TravelOptions/TravelOptions";
import WhyOneWay from "@/component/WhyOneWay/WhyOneWay";
import WhyYatri from "@/component/WhyYatri/WhyYatri";
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
