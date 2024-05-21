'use client';import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import MenuIcon from "@/public/burger-menu.png"; // Adjust the path according to your project structure

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleNavbar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button
        onClick={toggleNavbar}
        className="fixed top-4 left-4 z-[50] p-2 rounded"
      >
        <Image
          src={MenuIcon}
          alt="Menu Icon"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </button>
      
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20"
      >
        <div className="flex flex-row gap-3 items-center">
          <div className="relative">
            {/* <Image
              src="/horseLogo.jpg"
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-contain rounded-full"
            /> */}
          </div>
          <h1 className="text-white text-[25px] font-semibold">
            Aryan Pandey{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              {" "}
            </span>
          </h1>
        </div>

        <div className="flex flex-row gap-5 mb-2">
          {Socials.map((social) => (
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
