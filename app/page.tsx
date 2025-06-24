"use client";

import { Github, Globe, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import About from "./components/about";
import Experience from "./components/experience";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='min-h-screen bg-primary-bg text-white font-sans lg:flex lg:justify-between lg:gap-4'>
      {/* Cursor spotlight overlay */}
      <div
        className='fixed inset-0 pointer-events-none z-30 transition-opacity duration-300'
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(141, 29, 216, 0.15), transparent 80%)`,
        }}
      />
      {/* Fixed left Sidebar */}
      <header
        className={`lg:sticky lg:flex lg:top-0 lg:max-h-screen lg:flex-col lg:justify-between lg:w-[40%] lg:pt-24 lg:pb-12 lg:px-16 transition-all duration-300 `}
      >
        <div>
          <div className='relative mb-4 w-20 h-20 lg:w-40 lg:h-40'>
            <Image
              src='/images/profile-image.jpeg'
              alt='Mustapha Oyenuga'
              className='object-cover object-center rounded-[10px] shadow-lg shadow-primary-accent/20 hover:shadow-primary-accent/40 transition-shadow duration-300'
              fill
            />
          </div>
          <h1 className='text-3xl font-bold mb-2'>Mustapha Oyenuga</h1>
          <h2 className='text-lg text-slate-300 mb-6'>Front End Engineer</h2>
          <p className='text-slate-400 mb-8 lg:max-w-xs leading-relaxed'>
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          <nav className='space-y-4'>
            <NavItem name='About' />
            <NavItem name='Musings' />
            <NavItem name='Projects' />
          </nav>
        </div>

        {/* Social Icons */}
        <div className='flex space-x-6'>
          <Github className='w-6 h-6 text-slate-400 hover:text-primary-accent cursor-pointer transition-colors duration-300' />
          <Linkedin className='w-6 h-6 text-slate-400 hover:text-primary-accent cursor-pointer transition-colors duration-300' />
          <Globe className='w-6 h-6 text-slate-400 hover:text-primary-accent cursor-pointer transition-colors duration-300' />
          <Instagram className='w-6 h-6 text-slate-400 hover:text-primary-accent cursor-pointer transition-colors duration-300' />
          <Twitter className='w-6 h-6 text-slate-400 hover:text-primary-accent cursor-pointer transition-colors duration-300' />
        </div>
      </header>

      {/* Main scrollable content */}
      <main className='lg:w-[60%] lg:pt-24 lg:pb-14 lg:px-16'>
        <div className='lg:max-w-2xl'>
          <About />
          <Experience />
        </div>
      </main>

      {/* <section className='w-full bg-slate-800 p-8'>
        <h2 className='font-bold text-2xl mb-4'>Works</h2>
        <article>
          <h3>Hello World</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            suscipit exercitationem ratione molestiae rerum id asperiores iste
            voluptatibus eos ea, illum laboriosam reprehenderit dolor fugiat
            necessitatibus itaque distinctio aliquid non!
          </p>
        </article>
      </section> */}
    </div>
  );
}

interface NavItemProps {
  name: string;
}
const NavItem = ({ name }: NavItemProps) => (
  <div className='group cursor-pointer'>
    <div className='flex items-center space-x-4'>
      <div className='w-8 h-px bg-slate-600 group-hover:bg-white group-hover:w-16 transition-all duration-150' />
      <span className='text-xs uppercase font-bold tracking-widest text-slate-500 group-hover:text-white transition-colors duration-300'>
        {name}
      </span>
    </div>
  </div>
);
