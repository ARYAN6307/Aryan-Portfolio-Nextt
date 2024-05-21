"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { FlipWords } from "./ui/flip-words";
import Card from "./ui/card";

export function WobbleCardDemo() {
  const words = ["Android", "Websites", "Ui/Ux", "ios"];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl p-10 mt-5 mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] lg:min-h-[250px]"
        className=""
      >
       <h3 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-transparent">hi</h3>

        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            A Tech-Driven coder with great background in Programming
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          With over 500 DSA problems solved, 10+ projects completed, and experience in various tech stacks, I have the skills to tailor awesome and innovative websites.
          </p>
        </div>
        <Image
          src="/linear.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 pt-0 min-h-[250px]">
        <Card/>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[400px] lg:min-h-[600px] xl:min-h-[250px]">
       <h2 className="max-w-lg md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-transparent">hi</h2>
        <div className="max-w-lg">
          <h2 className="max-w-lg md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          I can build
        <FlipWords words={words} /> <br />  
 with full, wonderful experiences—engaging, creative, and unique!
          </h2>
          <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
      
      </div>
        </div>
        <Image
          src="/linear.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
