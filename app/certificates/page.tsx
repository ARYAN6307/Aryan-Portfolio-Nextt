'use client'
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "@/components/ProjectTag";
import ProjectCard from '@/components/Certcard' // Adjust the path as needed
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  previewUrl: string;
  tooltipData: { id: number; name: string; designation: string; image: string }[];
};

const certificatesData: Project[] = [
  {
    id: 1,
    title: "AWS Cloud Technical Essentials",
    description: "Certificate 1 description",
    image: "/Certificates/Coursera/awscloud.png",
    tag: ["All", "Web"],
    
    previewUrl: "https://dsavisualiser.netlify.app/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 2, name: "AWS", designation: "Services Provider", image: "/aws.png" },
      { id: 3, name: "Cloud", designation: "Skill", image: "/cloud.png" }
    ]
  },
  {
    id: 2,
    title: "AWS S3 Basics",
    description: "Certificate 2 description",
    image: "/Certificates/Coursera/awss3.png",
    tag: ["All", "Web"],
    
    previewUrl: "https://dsavisualiser.netlify.app/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 2, name: "AWS", designation: "Services Provider", image: "/aws.png" },
      { id: 3, name: "Cloud", designation: "Skill", image: "/cloud.png" }
    ]
  },
  {
    id: 3,
    title: "Microsoft Azure Services and Lifecycle",
    description: "Certificate 3 description",
    image: "/Certificates/Coursera/MicrosoftAzure.png",
    tag: ["All", "Web"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 2, name: "Microsoft", designation: "Services Provider", image: "/micr.png" },
      { id: 3, name: "Cloud", designation: "Skill", image: "/cloud.png" }
    ]
  },
  {
    id: 4,
    title: "Introduction to Android Mobile Application Development",
    description: "Certificate 4 description",
    image: "/Certificates/Coursera/Mobiledev.png",
    tag: ["All", "Web"],
    
    previewUrl: "https://event-o-srm.netlify.app/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 2, name: "Meta", designation: "Services Provider", image: "/meta.png" },
      { id: 3, name: "Android", designation: "Skill", image: "/cloud.png" }
    ]
  },
  {
    id: 5,
    title: "Introduction to Basic Game Development",
    description: "Certificate 5 description",
    image: "/Certificates/Coursera/Gamedev.png",
    tag: ["All", "Web"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 2, name: "Game Dev", designation: "Skill", image: "/game.png" },
      { id: 3, name: "Csharp", designation: "Language", image: "/csharp.png" }
    ]
  },
  {
    id: 6,
    title: "Python Programming",
    description: "Certificate 6 description",
    image: "/Certificates/Coursera/Python.png",
    tag: ["All", "Web"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 3, name: "Python", designation: "Language", image: "/python.png" }
    ]
  },
  {
    id: 7,
    title: "Strategically build and Engage network on Linkedin",
    description: "Certificate 7 description",
    image: "/Certificates/Coursera/Strategically-build.png",
    tag: ["All", "Web"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 3, name: "Linkedin", designation: "Job Platform", image: "/linkedin.png" }
    ]
  },
  {
    id: 8,
    title: "Use SurveyMonkey to Create and Analyze Surveys",
    description: "Certificate 8 description",
    image: "/Certificates/Coursera/Analyze.png",
    tag: ["All", "Web"],
    
    previewUrl: "https://chess-game-miniproj.netlify.app/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 3, name: "SurveyMonkey", designation: "Analytics", image: "/sur.jpg" }
    ]
  },
  {
    id: 9,
    title: "Introduction to Google Docs",
    description: "Certificate 9 description",
    image: "/Certificates/Coursera/GoogleDocs-1.png",
    tag: ["All", "Web"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Coursera", designation: "Learning Platform", image: "/coursera.webp" },
      { id: 3, name: "Google Docs", designation: "File Mgt Platform", image: "/docs.png" }
    ]
  },
  {
    id: 10,
    title: "Introduction to Programming in C",
    description: "Certificate 10 description",
    image: "/Certificates/NPTEL/Cprog.png",
    tag: ["All", "React/Next"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Nptel", designation: "Learning Platform", image: "/nptel.png" },
      { id: 3, name: "C", designation: "Language", image: "/c.png" }
    ]
  },
  {
    id: 11,
    title: "Introduction to Operating Systems",
    description: "Certificate 11 description",
    image: "/Certificates/NPTEL/Operatingsys.png",
    tag: ["All", "React/Next"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Nptel", designation: "Learning Platform", image: "/nptel.png" },
      { id: 3, name: "Operating Systems", designation: "Skill", image: "/os.jpg" }
    ]
  },
  {
    id: 12,
    title: "C Sharp Basic",
    description: "Certificate description",
    image: "/Certificates/Hackerrank/c_sharp_basiccertificate-1.png",
    tag: ["All", "Android"],
    
    previewUrl: "https://app.flutterflow.io/share/pray-kart-roegh1",
    tooltipData: [
      { id: 1, name: "Hackerrank", designation: "Coding Platform", image: "/hackerrank.png" },
      { id: 3, name: "Csharp", designation: "Language", image: "/csharp.png" }
    ]
  },
  {
    id: 13,
    title: "Java Basic",
    description: "Certificate description",
    image: "/Certificates/Hackerrank/java_basiccertificate-1.png",
    tag: ["All", "Android"],
    
    previewUrl: "/",
    tooltipData: [
      { id: 1, name: "Hackerrank", designation: "Coding Platform", image: "/hackerrank.png" },
      { id: 3, name: "Java", designation: "Language", image: "/java.png" }
    ]
  },
  {
    id: 14,
    title: "Problem Solving Intermediate",
    description: "Certificate description",
    image: "/Certificates/hackerrank/problem_solving_intermediatecertificate-1.png",
    tag: ["All", "Android"],
    
    previewUrl: "https://www.figma.com/design/iWlQfSMwcEBqaDOAOaxTIz/Wikipedia-Redesign?node-id=0%3A1&t=lISgmngqVygXtURm-1",
    tooltipData: [
      { id: 1, name: "Hackerrank", designation: "Coding Platform", image: "/hackerrank.png" },
      { id: 2, name: "DSA", designation: "Skill", image: "/dsa.png" },
      { id: 3, name: "Problem Solving", designation: "Skill", image: "/ps.png" }
    ]
  },
  {
    id: 15,
    title: "Python Basic",
    description: "Certificate description",
    image: "/Certificates/Hackerrank/python_basiccertificate-1.png",
    tag: ["All", "Android"],
    
    previewUrl: "https://www.figma.com/design/CseOjSESiAVK1H6zSiwfCi/Ddsgnr---Newsletter-Webflow-Website-Template-(Community)?node-id=0-1",
    tooltipData: [
      { id: 1, name: "Hackerrank", designation: "Coding Platform", image: "/hackerrank.png" },
      { id: 3, name: "Python", designation: "Language", image: "/python.png" }
    ]
  },
  {
    id: 16,
    title: "SQL Basic",
    description: "Certificate description",
    image: "/Certificates/Hackerrank/sql_basiccertificate-1.png",
    tag: ["All", "Android"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Hackerrank", designation: "Coding Platform", image: "/hackerrank.png" },
      { id: 3, name: "SQL", designation: "Database", image: "/sql.png" }
    ]
  },
  {
    id: 17,
    title: "Introduction to C",
    description: "Certificate description",
    image: "/Certificates/Sololearn/C.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "C", designation: "Language", image: "/c.png" }
    ]
  },
  {
    id: 18,
    title: "C Intermediate",
    description: "Certificate description",
    image: "/Certificates/Sololearn/Cintermediate.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "C", designation: "Language", image: "/c.png" }
    ]
  },
  {
    id: 19,
    title: "C++",
    description: "Certificate description",
    image: "/Certificates/Sololearn/CPP.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "C++", designation: "Language", image: "/cpp.png" }
    ]
  },
  {
    id: 20,
    title: "C++ Intermediate",
    description: "Certificate description",
    image: "/Certificates/Sololearn/CPPi.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "C++", designation: "Language", image: "/cpp.png" }
    ]
  },
  {
    id: 21,
    title: "C Sharp",
    description: "Certificate description",
    image: "/Certificates/Sololearn/Csharp.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "Csharp", designation: "Language", image: "/csharp.png" }
    ]
  },
  {
    id: 22,
    title: "Java",
    description: "Certificate description",
    image: "/Certificates/Sololearn/Java.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "Java", designation: "Language", image: "/java.png" }
    ]
  },
  {
    id: 23,
    title: "Kotlin",
    description: "Certificate description",
    image: "/Certificates/Sololearn/Kotlin.png",
    tag: ["All", "UI"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Sololearn", designation: "Coding Platform", image: "/sololearn.png" },
      { id: 3, name: "Kotlin", designation: "Language", image: "/kotlin.png" }
    ]
  },
  {
    id: 24,
    title: "Tech Nova Winning Certificate",
    description: "Certificate description",
    image: "/Certificates/Others/tn.png",
    tag: ["All", "others"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "SRM", designation: "College", image: "/srm.jpg" },
      { id: 2, name: "Prize", designation: "2nd winner", image: "/prize.png" },
      { id: 3, name: "FlutterFlow", designation: "App", image: "/ff.png" }
    ]
  },
  {
    id: 25,
    title: "The Fundamentals of Digital Marketing",
    description: "Certificate description",
    image: "/Certificates/Others/gdm.png",
    tag: ["All", "others"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Google", designation: "Platform Provider", image: "/google.png" },
      { id: 3, name: "Digital Marketing", designation: "Skill", image: "/dm.png" }
    ]
  },
  {
    id: 26,
    title: "Gfg Cloud Bootcamp Completion",
    description: "Certificate description",
    image: "/Certificates/Others/gcp.png",
    tag: ["All", "others"],
    
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
    tooltipData: [
      { id: 1, name: "Geeksforgeeks", designation: "Coding Platform", image: "/gfg.png" },
      { id: 3, name: "Cloud", designation: "Skill", image: "/cloud.png" }
    ]
  },
];

const Page: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = certificatesData.filter((project) =>
    tag === "All" || project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div
      style={{ backgroundImage: "url(/mountains.jpg)" }}
      className="w-screen h-screen flex items-center flex-col justify-center bg-center bg-cover overflow-scroll overflow-x-hidden"
    >
      <h2 className="text-center text-4xl font-bold text-white mt-14 md:mb-12">
        My Certificates
      </h2>
      
      {/* Add NavigationMenuDemo */}
      <div className="absolute top-20 left-0 text-white py-4">
        <NavigationMenuDemo />
      </div>
      
      <div className="flex items-center flex-col gap-5 max-w-[90%] max-h-[90%] sm:px-5">
        <div className="text-white flex flex-wrap justify-center items-center gap-2 py-6 scale-70 sm:scale-70 lg:scale-100">
          <ProjectTag
            onClick={() => handleTagChange("All")}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Web")}
            name="Coursera"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={() => handleTagChange("React/Next")}
            name="Nptel"
            isSelected={tag === "React/Next"}
          />
          <ProjectTag
            onClick={() => handleTagChange("Android")}
            name="Hackerrank"
            isSelected={tag === "Android"}
          />
          <ProjectTag
            onClick={() => handleTagChange("UI")}
            name="Sololearn"
            isSelected={tag === "UI"}
          />
         <ProjectTag
            onClick={() => handleTagChange("others")}
            name="Others"
            isSelected={tag === "others"}
          />
        </div>
        <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-20">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                text={project.description}
                previewUrl={project.previewUrl}
                tooltipData={project.tooltipData}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;