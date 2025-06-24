"use client";

import { useEffect, useState } from "react";
import About from "./components/about";
import Experience from "./components/experience";
import Sidebar from "./components/sidebar";
import Works from "./components/works";
import Musings from "./components/musings";

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
      <Sidebar />
      {/* Main scrollable content */}
      <main className='lg:w-[55%] lg:py-20 lg:px-16'>
        <About />
        <Experience />
        <Works />
        <Musings />
      </main>
    </div>
  );
}
