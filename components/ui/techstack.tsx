"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";

interface TooltipItem {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface AnimatedTooltipPreviewProps {
  items: TooltipItem[];
}

const AnimatedTooltipPreview: React.FC<AnimatedTooltipPreviewProps> = ({ items }) => {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
};

export default AnimatedTooltipPreview;
