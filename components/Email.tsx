"use client";
import React, { useState } from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  email: string;
  subject: string;
  message: string;
}

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const data: FormData = {
      email: target.email.value,
      subject: target.subject.value,
      message: target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
  id="contact"
  className="grid grid-cols-1 md:grid-cols-2 my-12 pt-14 pb-5 gap-4 relative"
>
  <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
  <div className="z-10 px-4 md:px-0">
    <h5 className="text-xl font-bold text-white my-2">
      Let&apos;s Connect
    </h5>
    <p className="text-[#ADB7BE] mb-4 max-w-md">
      I&apos;m currently looking for new opportunities, my inbox is always
      open. Whether you have a question or just want to say hi, I&apos;ll
      try my best to get back to you!
    </p>
    <div className="socials flex flex-row gap-2">
      <Link href="https://github.com/ARYAN6307">
        <Image src={GithubIcon} alt="Github Icon" />
      </Link>
      <Link href="https://linkedin.comhttps://www.linkedin.com/in/aryan-pandey-b07676220/">
        <Image src={LinkedinIcon} alt="Linkedin Icon" />
      </Link>
    </div>
  </div>
  <div className="z-10 px-4 md:px-0">
    {emailSubmitted ? (
      <p className="text-green-500 text-sm mt-2">
        Email sent successfully!
      </p>
    ) : (
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="aryan.lko04@gmail.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="text-white block text-sm mb-2 font-medium"
          >
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Just saying hi"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-white block text-sm mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            placeholder="Let's talk about..."
          />
        </div>
        <button
          type="submit"
          className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
        >
          Send Message
        </button>
      </form>
    )}
  </div>
</section>

  );
};

export default EmailSection;
