"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-8 py-4 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/20 backdrop-blur-md"
            : "border-b border-white/5"
        }`}
      >
        {/* Left — Name */}
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white font-semibold text-xl tracking-wide justify-self-start"
        >
          Alice's Portfolio
        </motion.span>

        {/* Center — Floating Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="justify-self-center hidden md:block"
        >
          <div
            className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300 ${
              scrolled
                ? "bg-white/5 border-white/20 backdrop-blur-md shadow-[0_0_20px_rgba(0,100,255,0.2)]"
                : "bg-white/5 border-white/10 backdrop-blur-sm"
            }`}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="px-4 py-1.5 text-xs tracking-widest uppercase text-white/60 hover:text-white rounded-full transition-all duration-300 hover:bg-white/10"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <div className="absolute right-8 flex items-center gap-4">

          {/* Glow Button — desktop only */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{
              boxShadow:
                "0 0 24px rgba(0, 100, 255, 0.6), inset 0 0 16px rgba(0, 100, 255, 0.1)",
            }}
            className="hidden md:block text-base font-semibold px-6 py-2.5 rounded-full border border-blue-400/50 text-blue-300 hover:text-white hover:border-blue-400 transition-all duration-300"
            style={{
              boxShadow:
                "0 0 12px rgba(0, 100, 255, 0.3), inset 0 0 12px rgba(0, 100, 255, 0.05)",
            }}
          >
            Let's Talk ✦
          </motion.a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-white transition-all duration-300"
            />

            <motion.span
              animate={
                menuOpen
                  ? { opacity: 0 }
                  : { opacity: 1 }
              }
              className="block w-6 h-0.5 bg-white transition-all duration-300"
            />

            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -8 }
                  : { rotate: 0, y: 0 }
              }
              className="block w-6 h-0.5 bg-white transition-all duration-300"
            />
          </button>

        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-blue-400 text-sm tracking-widest uppercase transition-colors duration-300 py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 text-center text-xs font-semibold px-5 py-3 rounded-full border border-blue-400/50 text-blue-300 hover:text-white hover:border-blue-400 transition-all duration-300"
                style={{
                  boxShadow: "0 0 12px rgba(0, 100, 255, 0.3)",
                }}
              >
                Let's Talk ✦
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}