import ThreeDCardDemo from "@/components/3dcardDemo";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center bg-black justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[69%] w-[85%] relative flex flex-row justify-end bg-cover bg-center rounded-xl border border-white"
      >
        <div className="h-[40rem] w-full bg-transparent flex flex-col items-center justify-start mt-5 overflow-hidden rounded-md">
      <h1 className="md:text-3.5xl text-1.5xl lg:text-5xl font-bold text-center text-white relative z-20">
        Resume
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1600}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        
        {/* Radial Gradient to prevent sharp edges */}
        
        <div className="absolute text-2xl inset-0 w-full h-full bg-transparent text-gray-400 font-semibold dark:text-gray-300 my-10 mx-0">
        I am pursuing a B.Tech in Computer Science at SRM University, Ghaziabad, Uttar Pradesh, with a GPA of 9.30/10.00, expected to graduate in June 2025. I have completed a virtual internship with PwC, enhancing my skills in Java, Python, SQL, DevOps, and Cyber Security.

        </div>
      </div>
    </div>
        < ThreeDCardDemo/>
      </div>
      
    </div>
  );
};

export default Page;
