'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-b-gray-300">
      <div className="flex items-center justify-between px-10 py-2">
        <div className="w-68">
          <img src="/logos/gdgoc-logo-horizontal-light.png" alt="" />
        </div>

        {/* Hamburger button - visible on mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-10">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#resources">Resources</NavLink>
            <NavLink href="#membership">Membership</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="/about-us">About us</NavLink>
          </ul>
        </nav>
      </div>

      {/* Mobile nav */}
      <nav className={`md:hidden border-t border-t-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-4">
          <NavLink href="#hero" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#events" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
          <NavLink href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
          <NavLink href="#resources" onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
          <NavLink href="#membership" onClick={() => setIsMenuOpen(false)}>Membership</NavLink>
          <NavLink href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <NavLink href="/about-us" onClick={() => setIsMenuOpen(false)}>About us</NavLink>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ children, href, onClick }: ComponentChildrenProp & { href: string; onClick?: () => void }) {
  return (
    <li className="md:inline-block">
      <a
        href={href}
        onClick={onClick}
        className="block px-4 py-3 md:p-0 cursor-pointer font-medium hover:text-blue-500 transition-colors hover:border-b-blue-500 border-b-2 border-b-transparent"
      >
        {children}
      </a>
    </li>
  );
}
