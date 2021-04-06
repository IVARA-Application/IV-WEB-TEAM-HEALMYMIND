import React from "react";

import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import ContactUs from "../components/ContactUs";
import MainPage from "../components/MainPage";

export default function HomePage() {
  return (
    <div>
      <MainPage />
      <AboutUs />
      <Blogs />
      <ContactUs />
    </div>
  );
}
