"use client";

import EmailSection from "@/components/Email";
import Footer from "@/components/Footer";
import Robo from "@/components/canvas/Robo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen relative overflow-y-scroll bg-black m-0 p-0">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[850px]">
          <h1 className="text-[50px] text-white font-semibold">
            Explore new Ideas and build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Innovative Solutions
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
          Welcome to my portfolio, your gateway to exploring my projects, certifications, resume, and skills. Interested in collaborating on the next big project? Feel free to reach out and contact me. Let's create something amazing together!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/resume"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
        <Robo/>
      </div>

      <div
        className="flex items-center w-full bg-cover bg-center h-fit"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <WobbleCardDemo />
      </div>

      <div
        className="flex flex-col w-full bg-cover bg-center h-screen lg:px-40 sm:px-20"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <EmailSection />
        <Footer />
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
        <Link
          href="/resume"
          className="rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Resume
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
