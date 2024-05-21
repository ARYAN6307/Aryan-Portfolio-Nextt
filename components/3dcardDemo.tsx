"use client";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3dcard";
import Image from "next/image";

export default function ThreeDCardDemo() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleSeeButtonClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="relative">
      {isFullScreen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-80" onClick={handleCloseFullScreen}>
          <div className="max-w-full max-h-full ">
            <Image
              src="/res.png"
              layout="fill"
              objectFit="contain"
              alt="Full Screen Image"
            />
          </div>
        </div>
      )}
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-fit sm:w-[20rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold  text-neutral-600 dark:text-white"
          >
            <CardItem
              translateZ="100"
              className="flex justify-center items-center w-full mt-0 mb-0"
            >
              <Image
                src="/res.png"
                height="00"
                width="1000"
                className="h-110 w-full relative align-middle object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
          </CardItem>

          <div className="flex justify-between items-center mt-5">
            <CardItem
              translateZ={20}
              as="a"
              href="https://drive.google.com/file/d/1NCfAf_P_XhW8BTaJqbCrSEUKCsSgC05M/view?usp=drive_link"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Download →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              onClick={handleSeeButtonClick}
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              See
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}
