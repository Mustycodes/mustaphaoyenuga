"use client";

import { useRef } from "react";
import ProjectCard from "./projectCard";

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);
  return (
    <section ref={sectionRef} className='mb-12'>
      <h2 className='uppercase mb-4 font-semibold tracking-[0.4em] relative after:content-[""] after:absolute after:top-full after:left-0 after:w-12 after:h-0.5 after:bg-primary-accent after:mt-1.5'>
        Works
      </h2>
      {[...Array(4)].map((project) => <ProjectCard />)}
    </section>
  );
};

export default Works;
