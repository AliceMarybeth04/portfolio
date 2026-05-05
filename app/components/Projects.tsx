"use client";

import React from "react";
import { motion } from "motion/react";
import TiltedCard from "./TiltedCard";
import BlurText from "./BlurText";

const projects = [
  {
    title: "Finovate Website",
    role: "Project Manager & Frontend Developer",
    description:
      "Developed a fintech website with a focus on user-friendly design and functionality. Achieved Top 3 Best Project at a local media summit.",
    tech: ["React", "Tailwind CSS"],
     image: "/Finovate (2).png",
    badge: "🏆 Top 3 Best Project",
    link: "https://finovate-tawny.vercel.app/",
  },
  {
    title: "Kintara Website",
    role: "Frontend Developer — Garuda Hacks 6.0",
    description:
      "Finalist (Top 7 of 133 Teams) in the Connecting Culture track at Garuda Hacks 6.0, contributing as a Fullstack Developer.",
    tech: ["PHP", "Laravel", "Tailwind CSS"],
    image: "/Pomodoro.png",
    badge: "🥇 Top 7 of 133 Teams",
    link: "",
  },
  {
    title: "Pomodoro Focus Mobile App",
    role: "Backend Developer",
    description:
      "Built backend functionality to connect To-Do List and Activity pages, enabling real-time task tracking.",
    tech: ["Java", "Kotlin", "Spring Boot"],
    image: "/Pomodoro.png",
    badge: null,
    link: "",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full min-h-screen bg-black/10 flex flex-col items-center justify-center px-8 py-24"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.p
          className="text-blue-400 text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          My Work
        </motion.p>
        <BlurText
          text="Featured Projects"
          className="text-4xl md:text-5xl font-bold text-white"
          delay={100}
          animateBy="words"
          direction="bottom"
        />
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* Tilted Card Image */}
            <a
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={
                project.link
                  ? "cursor-pointer"
                  : "cursor-default pointer-events-none"
              }
            >
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                captionText={project.title}
                containerHeight="220px"
                imageHeight="220px"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={10}
                showMobileWarning={false}
              />
            </a>

            {/* Project Info */}
            <div className="flex flex-col gap-2 px-1">
              {project.badge && (
                <span className="text-xs text-yellow-400 font-semibold">
                  {project.badge}
                </span>
              )}

              <h3 className="text-white font-bold text-lg">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    {project.title} ↗
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              <p className="text-blue-400 text-sm">{project.role}</p>

              <p className="text-white/50 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}