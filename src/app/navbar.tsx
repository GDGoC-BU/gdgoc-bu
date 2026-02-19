'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { TextBody } from '@/components/text';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-b-gray-300">
      <div className="brand-width-container flex items-center justify-between px-2.5 lg:px-10 py-2">
        <div className="w-68">
          <Image src="/logos/gdgoc-logo-horizontal-light.png" alt="GDGOC Logo" width={320} height={80} className="object-contain" />
        </div>

        {/* Hamburger button - visible on mobile only */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#events">Events</NavLink>
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">Resources</NavLink>
            <NavLink href="#">Membership</NavLink>
            <NavLink href="#">Contact</NavLink>
            <NavLink href="#">About us</NavLink>
          </ul>
        </nav>
      </div>

      {/* Mobile nav */}
      <nav className={`lg:hidden border-t border-t-gray-300 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-4">
          <NavLink href="#hero" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#events" onClick={() => setIsMenuOpen(false)}>Events</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>Resources</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>Membership</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>
          <NavLink href="#" onClick={() => setIsMenuOpen(false)}>About us</NavLink>
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ children, href, onClick }: ComponentChildrenProp & { href: string; onClick?: () => void }) {
  return (
    <li className="lg:inline-block">
      <Link
        href={href}
        onClick={onClick}
        className="block px-4 py-3 lg:p-0 cursor-pointer font-medium"
      >
        <TextBody className="text-[16px] font-medium  hover:text-brand-blue-300 transition-colors hover:border-b-brand-blue-300 border-b-2 border-b-transparent">{children}</TextBody>
      </Link>
    </li>
  );
}
