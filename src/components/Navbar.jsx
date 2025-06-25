import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-cyan-300 z-50 shadow-lg">
      <ul className="flex justify-center space-x-6 py-4">
        <li><a href="#hero" className="hover:text-white transition">Home</a></li>
        <li><a href="#about" className="hover:text-white transition">About</a></li>
        <li><a href="#certifications" className="hover:text-white transition">Certifications</a></li>
        <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
      </ul>
    </nav>
  );
}