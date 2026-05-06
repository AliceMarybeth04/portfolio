"use client";

import React from "react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center px-8 py-24 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-2xl w-full">

        {/* Label */}
        <motion.p
          className="text-blue-400 text-sm tracking-widest uppercase"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          Get In Touch
        </motion.p>

        {/* Heading */}
        <BlurText
          text="Let's Work Together"
          className="text-4xl md:text-5xl font-bold text-white justify-center"
          delay={100}
          animateBy="words"
          direction="bottom"
        />

        {/* Subtext */}
        <motion.p
          className="text-white/50 text-base md:text-lg leading-relaxed text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.30 }}
        >
          I'm currently open to new opportunities. Whether you have a project
          in mind or just want to say hi — my inbox is always open!
        </motion.p>

        {/* Contact Links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* Email */}
          <a
            href="mailto:alicemarybeth04@gmail.com"
            className="w-full sm:w-auto text-center px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            ✉️ Email Me
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/alice-marybeth-269a7a1bb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-8 py-3 border border-white/40 hover:border-blue-400 hover:text-blue-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            💼 LinkedIn
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/alicemarybeth"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-8 py-3 border border-white/40 hover:border-pink-400 hover:text-pink-400 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            Instagram
          </a>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-white/20 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          © 2026 Alice Marybeth. Built with Next.js & Tailwind CSS.
        </motion.p>

      </div>
    </section>
  );
}