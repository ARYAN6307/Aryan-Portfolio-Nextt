"use client";
import React, { useEffect } from 'react';
import gsap from 'gsap';
import EmailSection from "@/components/Email";
import Footer from "@/components/Footer";
import Robo from "@/components/canvas/Robo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });
    tl.to('.hulaa', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, 0.2);

  }, []);

  return (
    <main className="w-full h-screen relative overflow-y-scroll bg-black m-0 p-0">
      <div className="w-full h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full relative">
          <div className="relative z-10 flex flex-col items-center z-999 text-center md:items-start md:text-left pl-5 md:pl-40 pb-20 md:pb-20 gap-5 max-w-[850px]">
            <h1 className="text-[25px] md:text-[50px] hulaa text-white font-semibold transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
              Explore Innovation and Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                Solutions Together
              </span>
            </h1>
            <p className="text-gray-200 text-sm hulaa md:text-base transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
              Welcome to my portfolio, your gateway to exploring my projects, certifications, resume, and skills. Interested in collaborating on the next big project? Feel free to reach out and contact me. Let's create something amazing together!
            </p>
          </div>
          <Robo />
        </div>
      </div>

      <div className="w-full h-fit bg-cover bg-center bg-fixed" style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className="flex items-center justify-center w-full h-full">
          <WobbleCardDemo />
        </div>
      </div>
      

      <div className="w-full h-screen bg-cover bg-center bg-fixed lg:px-40 sm:px-20" style={{ backgroundImage: "url(/main-bg.webp)" }}>
        <div className="flex flex-col h-full">
          <EmailSection />
          <Footer />
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn more
        </Link>
        <Link href="/my-projects" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          My projects
        </Link>
        <Link href="/resume" className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          My Resume
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        {/* Additional content if needed */}
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image src="/trees.webp" alt="trees" width={2000} height={2000} className="w-full h-full object-cover" />
      </div>

      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute top-0 left-0 z-[10]" />
    </main>
  );
}
