"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import EmailSection from '@/components/Email';
import Footer from '@/components/Footer';
import { NavigationMenuDemo } from '@/components/NavigationMenuDemo';
import AnimatedTooltipPreview from '@/components/ui/techstack';
import { AnimatedListDemo } from '@/components/listdemo';
import { FollowingPointerDemo as PointerCard } from '@/components/ui/hackcard';

interface BlogContent {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  authorAvatar: string;
}

const blogContents: BlogContent[] = [
  {
    slug: "amazing-tailwindcss-grid-layouts",
    author: "Smart Dustbin",
    date: "28th April, 2023",
    title: "Ideathon",
    description:
      "Participated and presented the idea of Smart Dustbin.",
    image: "/gallery/bin.webp",
    authorAvatar: "/gallery/bin.jpg",
  },
  {
    slug: "learning-nextjs",
    author: "DSA",
    date: "1st March, 2024",
    title: "Concode Coding contest",
    description:
      "Participated and solved DSA problems in Java.",
    image: "/gallery/coding.jpg",
    authorAvatar: "/gallery/dsa.jpg",
  },
  {
    slug: "advanced-react-patterns",
    author: "Maths",
    date: "15th May, 2022",
    title: "Mathematics Quiz",
    description:
      "Participated and scored 3rd rank in whole college.",
    image: "/gallery/maths.jpg",
    authorAvatar: "/gallery/mlogo.webp",
  },
];

export default function Hackathons() {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1 } });

    tl.to('.hackathons-header', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', opacity: 1, y: 0 }, 0.2);
  }, []);

  const hackathonItems = [
    { id: 1, name: 'Aryan Pandey', designation: 'Android dev', image: '/html.png' },
    { id: 2, name: 'Tanmay Singh', designation: 'Ppt Maker', image: '/css.png' },
    { id: 4, name: 'Sudhanshu Pandey', designation: 'Animator', image: '/js.png' },
    { id: 5, name: 'Aryan Lakhanpal', designation: 'Database Handler', image: '/js.png' },
    { id: 6, name: 'Mohak Purwar', designation: 'Web dev', image: '/js.png' },
  ];

  return (
    <main className="w-full h-screen relative bg-cover overflow-x-hidden m-0 p-0" style={{ backgroundImage: 'url(/mountains.jpg)' }}>
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
        <div className="m-5">
          {/* Winning Hackathon Section */}
          <section className="w-full py-10 sm:px-5">
            <h2 className="text-[20px] md:text-[40px] text-white font-semibold text-center mb-5">Winning Hackathon</h2>
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-5">
              <div className="flex flex-col items-center w-full sm:w-1/2 h-full">
                <Image
                  src="/gallery/technova.jpg"
                  alt="Winning Hackathon"
                  width={700}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <AnimatedTooltipPreview items={hackathonItems} />
              </div>
              <div className="flex flex-col items-center w-full sm:w-1/2 h-full">
                <AnimatedListDemo />
              </div>
            </div>
            <p className="text-gray-200 text-sm md:text-base text-center max-w-[1000px] p-5 sm:p-0">
              I won the Tech Nova Hackathon with my project Praykart. The project involved innovative use of Flutter and Website technology to solve a real-world problem. It was a great experience working with a talented team and receiving recognition for our hard work.
            </p>
          </section>

          {/* Other Hackathons Section */}
          <section className="w-full py-10 sm:px-5">
            <h2 className="text-[20px] md:text-[40px] text-white font-semibold text-center mb-5">Other Hackathons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {blogContents.map((content) => (
                <PointerCard
                  key={content.slug}
                  blogContent={content}
                />
              ))}
            </div>
          </section>

          <EmailSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
