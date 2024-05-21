"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  title: string;
  text: string;
  previewUrl: string;
  gitUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, text, previewUrl, gitUrl }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div onClick={handleFlip} className="w-[500px] h-[300px] max-sm:w-80 max-md:w-100 max-sm:h-40 cursor-pointer">
      <motion.div
        className="flip-card-inner w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="w-full h-full group relative flip-card-front bg-contain bg-no-repeat bg-black bg-center text-white rounded-lg p-4"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        
        <div
          style={{ backgroundImage: `url(${image})`  }}
          className="w-full h-full group relative flip-card-back bg-cover bg-center  text-white rounded-lg "
        ><AuroraBackground>
         <div className="text-3xl md:text-2.5xl font-bold dark:text-white text-center">
         {title}
        </div>
        <div className="font-extralight text-base md:text-1.5xl dark:text-neutral-200 py-4">
        {text}
        </div>
        <div className="flex flex-row gap-3">
        <button className="bg-black dark:bg-white rounded-full z-10 w-fit text-white dark:text-black px-4 py-2">
        <Link legacyBehavior href={previewUrl} passHref>
                  <a target="_blank" rel="noopener noreferrer">Link</a>
        </Link> 
        </button>
        <button className="bg-black dark:bg-white rounded-full z-10 w-fit text-white dark:text-black px-4 py-2">
        <Link legacyBehavior href={gitUrl} passHref>
                  <a target="_blank" rel="noopener noreferrer">Github</a>
        </Link> 
        </button>
        </div>
          </AuroraBackground>
        </div>
     
      </motion.div>
    </div>
  );
};

export default ProjectCard;
