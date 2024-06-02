"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import EmailSection from "@/components/Email";
import Footer from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";

export default function Hackathons() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

    // Animate elements on the page
    tl.to('.hackathons-header', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, 0.2);
  }, []);

  return (
    <main className="w-full h-screen relative bg-cover overflow-y-scroll m-0 p-0" style={{ backgroundImage: "url(/mountains.jpg)" }}>
      {/* Navigation Menu */}
      <div className="absolute top-20 left-0 text-white py-4 z-20">
        <NavigationMenuDemo />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="relative z-10 flex flex-col items-center text-center pl-5 pb-20 gap-5 max-w-[850px]">
          <h1 className="text-[25px] md:text-[50px] hackathons-header text-white font-semibold transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
            Hackathons I Participated In
          </h1>
          <p className="text-gray-200 text-sm hackathons-header md:text-base transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
            Here you can find information about the hackathons I have participated in, the projects I built, and the experiences I gained. Feel free to explore and reach out if you want to collaborate on future hackathons!
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full bg-cover bg-center h-auto lg:px-40 sm:px-20">
        {/* Winning Hackathon Section */}
        <section className="w-full py-10">
          <h2 className="text-[20px] md:text-[40px] text-white font-semibold text-center mb-5">Winning Hackathon</h2>
          <div className="flex flex-col items-center">
            <Image src="/path/to/winning-hackathon.jpg" alt="Winning Hackathon" width={600} height={400} className="mb-5" />
            <p className="text-gray-200 text-sm md:text-base text-center max-w-[800px]">
              I won the XYZ Hackathon with my project ABC. The project involved innovative use of technology to solve a real-world problem. It was a great experience working with a talented team and receiving recognition for our hard work.
            </p>
          </div>
        </section>

        {/* Other Hackathons Section */}
        <section className="w-full py-10">
          <h2 className="text-[20px] md:text-[40px] text-white font-semibold text-center mb-5">Other Hackathons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col items-center">
              <Image src="/path/to/hackathon1.jpg" alt="Hackathon 1" width={300} height={200} className="mb-2" />
              <p className="text-gray-200 text-sm md:text-base text-center">Hackathon 1: Brief description of the project and experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/path/to/hackathon2.jpg" alt="Hackathon 2" width={300} height={200} className="mb-2" />
              <p className="text-gray-200 text-sm md:text-base text-center">Hackathon 2: Brief description of the project and experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/path/to/hackathon3.jpg" alt="Hackathon 3" width={300} height={200} className="mb-2" />
              <p className="text-gray-200 text-sm md:text-base text-center">Hackathon 3: Brief description of the project and experience.</p>
            </div>
            {/* Add more hackathons as needed */}
          </div>
        </section>

        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
