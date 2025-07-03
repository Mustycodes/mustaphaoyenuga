"use client";

import { useRef } from "react";
import FeaturedProjectCard from "./cards/featuredProjectCard";

const Works = () => {
  const projects = [
    {
      title: "Agency Landing Page",
      liveUrl: "https://themesberg.com",
      githubUrl: "https://themesberg.com",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
      image: "/images/project1.PNG",
    },
    {
      title: "Mail management system",
      liveUrl: "https://ui.glass",
      githubUrl: "https://themesberg.com",
      description:
        "Flowbite helps you connect with friends, family and communities of people who share your interests.",
      image: "/images/project1.PNG",
    },
  ];
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section ref={sectionRef} className='mb-12'>
      <h2 className='uppercase mb-8 font-semibold tracking-[0.4em] relative after:content-[""] after:absolute after:top-full after:left-0 after:w-12 after:h-0.5 after:bg-accent after:mt-1.5'>
        Featured Works
      </h2>
      <div className="flex flex-col gap-y-8">
        {projects.map((project, index) => (
        <FeaturedProjectCard
          key={index}
          title={project.title}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          description={project.description}
          image={project.image}
        />
      ))}
      </div>
    </section>
  );
};

export default Works;
