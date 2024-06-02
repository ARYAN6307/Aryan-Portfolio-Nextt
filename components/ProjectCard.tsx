'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora';
import AnimatedTooltipPreview from './ui/techstack';
import Link from 'next/link';

interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface ProjectCardProps {
  image: string;
  title: string;
  text: string;
  previewUrl: string;
  gitUrl: string;
  tooltipData: TooltipItem[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  text,
  previewUrl,
  gitUrl,
  tooltipData,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  return (
    <div
      onClick={handleFlip}
      className="w-[500px] h-[300px] max-sm:w-80 max-sm:h-40 max-md:w-full max-md:h-[250px] cursor-pointer"
    >
      <motion.div
        className="flip-card-inner w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-front absolute inset-0 w-full h-full group bg-contain bg-no-repeat bg-black bg-center text-white rounded-lg p-4 outline outline-slate-400 -outline-offset-3 hover:outline-none"
        >
          <div className="absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center">
            Learn more &gt;
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="flip-card-back absolute inset-0 w-full h-full group bg-cover bg-center text-white rounded-lg"
        >
          <AuroraBackground>
            <div className="text-2xl md:text-2.5xl font-bold dark:text-white text-center">
              {title}
            </div>
            <div className="font-extralight text-sm md:text-base dark:text-neutral-200 py-2 md:py-4">
              {text}
            </div>
            <div className="flex flex-row gap-2 md:gap-3 z-10">
              <Link legacyBehavior href={previewUrl} passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button bg-black dark:bg-white rounded-full z-100 w-fit text-white dark:text-black px-2 md:px-4 py-1 md:py-2"
                  onClick={(e) => e.stopPropagation()}  // Prevents flip on click
                >
                  Link
                </a>
              </Link>
              <Link legacyBehavior href={gitUrl} passHref>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button bg-black dark:bg-white rounded-full z-10 w-fit text-white dark:text-black px-2 md:px-4 py-1 md:py-2"
                  onClick={(e) => e.stopPropagation()}  // Prevents flip on click
                >
                  Github
                </a>
              </Link>
            </div>
            <div className="pt-2 mb-0">
              <AnimatedTooltipPreview items={tooltipData} />
            </div>
          </AuroraBackground>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
