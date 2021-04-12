import React from "react";

import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import ContactUs from "../components/ContactUs";
import HealMyMind from "../components/HealMyMind";
import MainPage from "../components/MainPage";
import IndividualCounselling from "../components/IndividualCounselling";
import CareerCounselling from "../components/CareerCounselling";
import TherapeauticAudio from "../components/TherapeauticAudios";

export default function HomePage() {
  return (
    <div>
      <MainPage />
      <AboutUs />
      <HealMyMind />
      <IndividualCounselling />
      <CareerCounselling />
      <TherapeauticAudio />
      <Blogs />
      <ContactUs />
    </div>
  );
}
