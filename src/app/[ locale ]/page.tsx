'use client';

import React, { useState } from "react";
import { toastifyNotification } from "@/utils/toastifyNotification";
import Carousel01 from "@/components/Carousel01";
import Carousel02 from "@/components/Carousel02";
import Carousel03 from "@/components/Carousel03";
import { Portfolios } from '@/components/component/portfolios'
import { Cta } from '@/components/component/cta'
import { Release } from '@/components/component/release'

import { About } from '@/components/component/about'
import { VideoSection } from '@/components/component/video-section'
import { ContactUs } from '@/components/component/contact-us'
import { Navbar } from '@/components/component/navbar';
import { Foote } from '@/components/component/foote'
import "@/styles/carousel.css";

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
    <Navbar />
    <Carousel01 />
    <Portfolios />
    <Carousel03 />  
    <Cta />
    <Release />
    <About />
    <Carousel02 />
    <VideoSection />
    <ContactUs />
    <Foote />
      
      <button
        className="fixed w-16 h-16 top-16 right-16 bg-neutral-900 dark:bg-neutral-100 rounded-full text-white dark:text-neutral-900"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
     
      </div>
    </div>
  </>
    

  );
}



