import ThreeDCardDemo from "@/components/3dcardDemo";
import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center flex-col bg-black justify-center overflow-y-auto"
    >
      <h1 className="text-xl mt-40 md:text-3.5xl lg:text-5xl font-bold text-center md:text-left pb-5 text-white top-5 relative z-20 sm:m-10">
        Resume
      </h1>
      <div
        style={{ backgroundImage: "url(atombg-comp.webp)" }}
        className="w-[85%] h-[80] max-w-4xl relative flex flex-col  md:flex-row justify-end bg-cover bg-center rounded-xl border sm:items-center sm:mt-30 border-white p-2 md:p-5"
      >
        <div className="h-auto w-full bg-transparent flex flex-col md:flex-row items-center justify-start md:justify-between mt-0 lg:mt-5  rounded-md p-2 py-2">
          <div className="flex flex-col md:flex-row items-center">
            <div className="text-base md:text-2xl text-gray-400 font-semibold dark:text-gray-300  mx-0 relative">
              I am pursuing a B.Tech in Computer Science at SRM University, Ghaziabad, Uttar Pradesh, with a GPA of 9.30/10.00, expected to graduate in June 2025. I have completed a virtual internship with PwC, enhancing my skills in Java, Python, SQL, DevOps, and Cyber Security.
            </div>
            <ThreeDCardDemo />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Page;
