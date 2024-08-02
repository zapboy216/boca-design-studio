'use client';

import React, { useState } from "react";
import { toastifyNotification } from "@/utils/toastifyNotification";
import Carousel01 from "@/components/Carousel01";
import "@/styles/carousel.css";
import Carousel02 from "@/components/Carousel02";
import Carousel03 from "@/components/Carousel03";
import Portfolio from '@components/Portfolio';
import CallToAction from '@components/CallToAction';
import FutureSoftwareRelease from '@components/FutureSoftwareRelease';
import AboutUs from '@components/AboutUs';
import VideoPresentation from '@components/VideoPresentation';
import ContactSection from '@components/ContactSection';

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = async () => {
    setDarkMode(!darkMode);
    setTimeout(async () => {
      // alert("Toggle dark mode");
      await toastifyNotification("Toggle dark mode", "success");
    }, 500);
  };
  return (
    <>
      
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-neutral-100 dark:bg-neutral-900">
        <Carousel01 />
        <Carousel02 />
        <Carousel03 />
      </div>
      <Portfolio />
    <CallToAction />
    <FutureSoftwareRelease />
    <AboutUs />
    <VideoPresentation />
    <ContactSection />
      <button
        className="fixed w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-neutral-100 rounded-full text-white dark:text-neutral-900 font-semibold"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  </>
    

  );
}



