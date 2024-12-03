"use client";

import { FiAlignJustify } from "react-icons/fi";
import { useEffect, useState, useRef, useCallback } from "react";
import Link from 'next/link';

export default function Hamburger() {
  const [isOpen, setIsopen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  const closeMenu = useCallback((e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsopen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", closeMenu);
    } else {
      window.removeEventListener("click", closeMenu);
    }
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [isOpen, closeMenu]);

  // Navigation links array
  const navLinks = [
    { path: "/", label: "Home", bgColor: "bg-red-200" },
    { path: "/about", label: "About", bgColor: "bg-red-300" },
    { path: "/skill", label: "Skill", bgColor: "bg-red-200" },
    { path: "/contact", label: "Contact", bgColor: "bg-red-300" },
  ];

  return (
    <div ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="block md:hidden p-2 text-gray-400 focus:outline-none"
      >
        <div
          className={`w-6 h-1 bg-black mb-1 transition-all ${
            isOpen ? "rotate-45 translate-y-2 hidden" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-black mb-1 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-black mb-1 transition-all ${
            isOpen ? "rotate-45 translate-y-2 hidden" : ""
          }`}
        />
        <FiAlignJustify />
      </button>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-10 left-0 w-40 bg-white shadow-md md:hidden rounded-md p-3 transition-transform ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-2 font-semibold text-green-800">
          {navLinks.map((link, index) => (
            <li key={index} className={`py-1 ${link.bgColor}`}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="md:flex md:justify-center gap-4">
          {navLinks.map((link, index) => (
            <li key={index} className="text-3xl font-bold">
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
