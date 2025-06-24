"use client"
import Link from "next/link";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary-bg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Initials */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-primary-accent hover:text-secondary-accent transition-colors">
              MO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="/about" 
                className="text-primary-text hover:text-primary-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </a>
              <a 
                href="/musings" 
                className="text-primary-text hover:text-primary-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                Musings
              </a>
              <a 
                href="/projects" 
                className="text-primary-text hover:text-primary-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a 
              href="/about" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors"
            >
              About
            </a>
            <a 
              href="/musings" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors"
            >
              Musings
            </a>
            <a 
              href="/projects" 
              onClick={closeMenu}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors"
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
