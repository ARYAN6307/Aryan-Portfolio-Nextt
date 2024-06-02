"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import EmailSection from "@/components/Email";
import Footer from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";

export default function CodingProfiles() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

    // Animate elements on the page
    tl.to('.coding-header', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, 0.2);
  }, []);

  return (
    <main className="w-full h-screen relative bg-cover overflow-y-scroll m-0 p-0" style={{ backgroundImage: "url(/mountains.jpg)" }}>
      {/* Navigation Menu */}
      <div className="absolute top-20 left-0 text-white py-4 z-20">
        <NavigationMenuDemo />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="relative z-10 flex flex-col items-center text-center pl-5 pb-20 gap-5 max-w-[850px]">
          <h1 className="text-[25px] md:text-[50px] coding-header text-white font-semibold transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
            Coding Profiles
          </h1>
          <p className="text-gray-200 text-sm coding-header md:text-base transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
            Here you can find my profiles on various coding platforms, showcasing my skills and contributions.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full bg-cover bg-center h-auto lg:px-40 sm:px-20">
        {/* Add your content here */}
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}