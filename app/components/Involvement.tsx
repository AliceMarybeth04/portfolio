"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BlurText from "./BlurText";

interface InvolvementItem {
  title: string;
  organization: string;
  location: string;
  period: string;
  type: "org" | "work" | "academic";
  descriptions: string[];
  photos: string[];
}

const involvements: InvolvementItem[] = [
  {
    title: "Back End Engineer Intern",
    organization: "PT Jaya Santoso Teknologi",
    location: "Tangerang, Banten",
    period: "January 2025 – July 2025",
    type: "work",
    descriptions: [
      "Developed a templating service for e-invitation pages using Java, Spring Boot, and Thymeleaf.",
      "Built RESTful APIs and integrated Redis caching to optimize performance and reduce load times for high-frequency content rendering.",
      "Collaborated with front-end and content teams to ensure seamless data flow and maintain consistent user experience.",
    ],
    photos: ["/anggota minyma.jpeg"],
  },
  {
    title: "Database System Laboratory Assistant",
    organization: "Multimedia Nusantara University",
    location: "Tangerang, Banten",
    period: "August 2024 – January 2025",
    type: "academic",
    descriptions: [
      "Assisted 40 students per lab session in applying database concepts and troubleshooting SQL queries.",
      "Provided technical support during lab sessions, improving student learning outcomes.",
      "Monitored student progress and provided one-on-one coaching to enhance practical skills.",
    ],
    photos: ["/Aslab1.jpeg", "/Aslab2.jpeg"],
  },
  {
    title: "Head of Event Division",
    organization: "PPIF UMN 2024",
    location: "Tangerang, Banten",
    period: "December 2023 – August 2024",
    type: "org",
    descriptions: [
      "Led the design and execution of PPIF 2024 events, successfully welcoming 150+ new students to the Informatics program.",
      "Collaborated with the Website Division to create and launch the PPIF 2024 website, enhancing event visibility and access to important information.",
    ],
    photos: ["/PPIF1.jpeg", "/PPIF2.jpeg", "/PPIF3.jpeg"],
  },
  {
    title: "Person In Charge",
    organization: "OMB UMN 2023",
    location: "Tangerang, Banten",
    period: "January 2023 – August 2023",
    type: "org",
    descriptions: [
      "Guided 20 new students in their introduction to the university, ensuring they had a positive first experience.",
    ],
    photos: ["/OMB.jpeg"],
  },
];

const typeConfig = {
  work: {
    label: "Work",
    color: "bg-green-500/20 border-green-500/40 text-green-300",
  },
  org: {
    label: "Organization",
    color: "bg-blue-500/20 border-blue-500/40 text-blue-300",
  },
  academic: {
    label: "Academic",
    color: "bg-purple-500/20 border-purple-500/40 text-purple-300",
  },
};

export default function Involvement() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="involvement"
      className="w-full min-h-screen flex flex-col items-center justify-center px-8 py-24"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <motion.p
          className="text-blue-400 text-sm tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.p>

        <BlurText
          text="Involvements"
          className="text-4xl md:text-5xl font-bold text-white"
          delay={100}
          animateBy="words"
          direction="bottom"
        />
      </div>

      {/* Timeline */}
      <div className="max-w-3xl w-full relative">

        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10" />

        <div className="flex flex-col gap-12">
          {involvements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-1.5 w-5 h-5 rounded-full bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center -translate-x-1/2">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
              </div>

              {/* Card */}
              <div className="bg-white/5 border border-white/10 hover:border-blue-400/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,100,255,0.1)]">

                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex flex-col gap-1">

                    <div className="flex items-center gap-2">
                      <span className="text-xl">
                      </span>

                      <h3 className="text-white font-bold text-lg leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-blue-400 text-sm font-medium">
                      {item.organization}
                    </p>

                    <p className="text-white/40 text-xs">
                      {item.location}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${typeConfig[item.type].color}`}
                    >
                      {typeConfig[item.type].label}
                    </span>

                    <span className="text-white/40 text-xs text-right">
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Descriptions */}
                <ul className="flex flex-col gap-2">
                  {item.descriptions.map((desc, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-white/60 text-sm leading-relaxed"
                    >
                      <span className="text-blue-400 mt-1 flex-shrink-0">
                        ●
                      </span>

                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Photos */}
                {item.photos.length > 0 && (
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {item.photos.map((photo, j) => (
                      <div
                        key={j}
                        onClick={() => setLightbox(photo)}
                        className="relative w-24 h-24 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 border border-white/10"
                      >
                        <Image
                          src={photo}
                          alt={`${item.organization} photo ${j + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            />

            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setLightbox(null)}
            >
              <div className="relative max-w-3xl max-h-[80vh] w-full h-full">
                <Image
                  src={lightbox}
                  alt="Photo"
                  fill
                  className="object-contain rounded-2xl"
                />
              </div>

              <button
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-200"
              >
                ✕
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}