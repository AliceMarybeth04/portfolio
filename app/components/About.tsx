"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const skills = [
  "HTML", "CSS", "Java", "JavaScript", "React",
  "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MySQL"
];

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-8 py-24"    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">

        {/* LEFT — Text Content */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Section Label */}
          <motion.p
            className="text-blue-400 text-sm tracking-widest uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            About Me
          </motion.p>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Turning ideas into <span className="text-blue-400">real products</span>
          </motion.h2>

          {/* Bio */}
          <motion.p
            className="text-white/60 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.30 }}
          >
            Fresh Computer Science graduate with a strong foundation in software
            engineering and proven experience in project management. Experienced
            in leading teams, coordinating development processes, and ensuring
            timely project delivery. Skilled in fullstack development, enabling
            effective communication between technical and non-technical
            stakeholders. Passionate about driving efficient workflows and
            delivering impactful digital products.
          </motion.p>

          {/* Skills */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </motion.div>

        </div>

        {/* RIGHT — Photo */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.60 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-blue-500/30">
            <Image
              src="/Alice.jpeg"
              alt="Alice Marybeth"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}