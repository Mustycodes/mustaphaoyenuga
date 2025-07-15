"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import About from "./components/about";
import Experience from "./components/experience";
import Sidebar from "./components/sidebar";
import Work from "./components/work";
import Musings from "./components/musings";


function useSpotlightMouse(throttleMs = 16) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const lastUpdateTime = useRef(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const updateMousePosition = useCallback((e: MouseEvent) => {
    const now = Date.now();
    if (now - lastUpdateTime.current < throttleMs) return;
    
    lastUpdateTime.current = now;
    
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
    
    animationFrameId.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, [throttleMs]);

  useEffect(() => {
    if (!isClient) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return;

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isClient, updateMousePosition]);

  return { mousePosition, isClient };
}

const SpotlightOverlay = ({
  mousePosition,
  isVisible,
}: {
  mousePosition: { x: number; y: number };
  isVisible: boolean;
}) => {
  if (!isVisible) return null;
  return (
    <div
      className='fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 hidden lg:block'
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(141, 29, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};

export default function Home() {
  const { mousePosition, isClient } = useSpotlightMouse();

  // Check if spotlight should be shown (only on desktop, no reduced motion)
  const [showSpotlight, setShowSpotlight] = useState(false);

  useEffect(() => {
    if (!isClient) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

    setShowSpotlight(isDesktop && !prefersReducedMotion);
  }, [isClient]);

  return (
    <div className='font-sans lg:flex lg:justify-between lg:gap-2'>
      <SpotlightOverlay
        mousePosition={mousePosition}
        isVisible={showSpotlight}
      />
      <Sidebar />
      <main className='pt-20 lg:flex-1 lg:py-12 lg:px-10'>
        <About />
        <Experience />
        <Work />
        <Musings />
      </main>
    </div>
  );
}
