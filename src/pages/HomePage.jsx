import React from "react";

import AboutUs from "../components/AboutUs";
import Blog1 from "../components/Blog1";
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
      {/* <Blog1 /> */}
    </div>
  );
}
