import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border z-10 mt-0 mb-0 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>LOGO</span>
        <p className="text-slate-600">Aryan Pandey Portfolio.</p>
      </div>
    </footer>
  );
};

export default Footer;