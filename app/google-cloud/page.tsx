'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import EmailSection from "@/components/Email";
import Footer from "@/components/Footer";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import ImageSlider from '@/components/ImageSliderGcp';

export default function GoogleCloudAchievements() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1 } });

    // Animate elements on the page
    tl.to('.achievements-header', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, 0.2);
  }, []);

  const goodiesImages = [
    'https://images.unsplash.com/photo-1612831455543-8274a9b8bb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1501975558167-11c5dbbcd5c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400'
  ];

  const badgesImages = [
    'https://images.unsplash.com/photo-1586074331526-a7ec7c99390d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1586074342142-6c086df6ba15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1586074339303-f7e0723a171b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400',
    'https://images.unsplash.com/photo-1586074342347-4d0dfda6e3b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg1MTN8MHwxfGFsbHwxfHx8fHx8fHwxNjEyOTUyNzQw&ixlib=rb-1.2.1&q=80&w=400'
  ];

  return (
    <main className="w-full h-screen relative bg-cover overflow-y-scroll m-0 p-0" style={{ backgroundImage: "url(/mountains.jpg)" }}>
      {/* Navigation Menu */}
      <div className="absolute top-20 left-0 text-white py-4 z-20">
        <NavigationMenuDemo />
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="relative z-10 flex flex-col items-center text-center pl-5 pb-20 gap-5 max-w-[850px]">
          <h1 className="text-[25px] md:text-[50px] achievements-header text-white font-semibold transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
            Google Cloud Achievements
          </h1>
          <p className="text-gray-200 text-sm achievements-header md:text-base transform translate-y-100 opacity-0" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)' }}>
            Here you can find my achievements on Google Cloud, showcasing my skills and contributions.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-full bg-cover bg-center h-auto lg:px-40 sm:px-20">
        <h2 className="text-center text-3xl text-white mt-8">Goodies I Received</h2>
        <ImageSlider images={goodiesImages} />

        <h2 className="text-center text-3xl text-white mt-8">Badges I Own</h2>
        <ImageSlider images={badgesImages} />

        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
