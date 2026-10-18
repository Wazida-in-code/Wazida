"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, personalInfo } from "@/data/portfolio";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-md border-b border-border-subtle shadow-lg shadow-navy-950/50"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight text-text-primary hover:text-blue-bright transition-colors duration-300"
          onClick={closeMenu}
        >
          {personalInfo.firstName}
          <span className="text-blue-electric">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-blue-bright transition-colors duration-300 rounded-lg hover:bg-navy-800/50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden inline-flex min-h-11 min-w-11 items-center justify-center p-2 text-text-secondary hover:text-blue-bright transition-colors duration-300 rounded-lg hover:bg-navy-800/50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? (
            <HiX className="w-6 h-6" aria-hidden="true" />
          ) : (
            <HiMenuAlt3 className="w-6 h-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isOpen}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={closeMenu}
          className="absolute inset-0 h-full w-full bg-navy-950/95 backdrop-blur-md"
        />

        <ul
          id="mobile-navigation"
          className="relative flex flex-col items-center justify-center gap-2 pt-12 px-6"
        >
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`w-full transition-all duration-300 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 75}ms` : "0ms" }}
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="block min-h-12 text-center py-3 px-4 text-lg font-medium text-text-secondary hover:text-blue-bright hover:bg-navy-800/50 rounded-xl transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
