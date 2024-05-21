"use client"

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "@/components/ProjectTag";
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
};

const projectsData: Project[] = [
  {
    id: 1,
    title: "DSA Visualiser",
    description: "Project 1 description",
    image: "/images/projects/dsa.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dsavisualiser.netlify.app/",
  },
  {
    id: 2,
    title: "Ecommerce Website",
    description: "Project 2 description",
    image: "/images/projects/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dsavisualiser.netlify.app/",
  },
  {
    id: 3,
    title: "Travel Website",
    description: "Project 3 description",
    image: "/images/projects/travelweb.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Event-o-SRM",
    description: "Project 4 description",
    image: "/images/projects/eventosrm.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://event-o-srm.netlify.app/",
  },
  {
    id: 5,
    title: "Web Quiz",
    description: "Authentication and CRUD operations",
    image: "/images/projects/WebQuiz.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Instagram Clone",
    description: "Project 5 description",
    image: "/images/projects/ins.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Food Delivery",
    description: "Project 5 description",
    image: "/images/projects/Fooddel.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Chess Online",
    description: "Project 5 description",
    image: "/images/projects/chess.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://chess-game-miniproj.netlify.app/",
  },
  {
    id: 9,
    title: "Photo Gallery",
    description: "Project 5 description",
    image: "/images/projects/gallery.png",
    tag: ["All", "React/Next"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Nexus AI",
    description: "Project 5 description",
    image: "/images/projects/nexus.png",
    tag: ["All", "React/Next"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 11,
    title: "Fileizer",
    description: "Project 5 description",
    image: "/images/projects/file.png",
    tag: ["All", "React/Next"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 12,
    title: "Praykart",
    description: "Project 5 description",
    image: "/images/projects/pray.jpg",
    tag: ["All", "Android"],
    gitUrl: "/",
    previewUrl: "https://app.flutterflow.io/share/pray-kart-roegh1",
  },
  {
    id: 13,
    title: "Nating",
    description: "Project 5 description",
    image: "/images/projects/nty.png",
    tag: ["All", "Android"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 14,
    title: "Wikipedia 2.0 Design",
    description: "Project 5 description",
    image: "/images/projects/wiki.png",
    tag: ["All", "UI"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/iWlQfSMwcEBqaDOAOaxTIz/Wikipedia-Redesign?node-id=0%3A1&t=lISgmngqVygXtURm-1",
  },
  {
    id: 15,
    title: "Newspaper Letter Website Design",
    description: "Project 5 description",
    image: "/images/projects/Newsletter.png",
    tag: ["All", "UI"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/CseOjSESiAVK1H6zSiwfCi/Ddsgnr---Newsletter-Webflow-Website-Template-(Community)?node-id=0-1",
  },
  {
    id: 16,
    title: "Tourist Website Design",
    description: "Project 5 description",
    image: "/images/projects/tourist.png",
    tag: ["All", "UI"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/cj3mhoDO3FlfnUilqUpSD9/Untitled?node-id=0%3A1&t=eD3n1eR80ILPvMd2-1",
  },
];

const Page: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
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
      My Projects
    </h2>
    <div className="flex items-center flex-col gap-5 max-w-[90%] max-h-[90%] sm:px-5">
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Web")}
          name="web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={() => handleTagChange("React/Next")}
          name="React/Next"
          isSelected={tag === "React/Next"}
        />
        <ProjectTag
          onClick={() => handleTagChange("Android")}
          name="Android"
          isSelected={tag === "Android"}
        />
        <ProjectTag
          onClick={() => handleTagChange("UI")}
          name="UI"
          isSelected={tag === "UI"}
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
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
  
  )
}

export default Page

