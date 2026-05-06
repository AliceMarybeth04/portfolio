"use client";

import React from "react";
import { motion } from "motion/react";
import TiltedCard from "./TiltedCard";
import CircularText from "./CircularText";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen flex items-center justify-center px-8 py-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-16">

        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-8">

          <motion.p
            className="text-blue-400 text-xl tracking-widest uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Turning ideas into{" "}
            <span className="text-blue-400">real products</span>
          </motion.h2>

          <motion.p
            className="text-white/60 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.30 }}
          >
            Fresh Computer Science graduate with a strong foundation in software engineering and proven experience in project management. 
            Experienced in leading teams, coordinating development processes, 
            and ensuring timely project delivery. Skilled in fullstack development, enabling effective 
            communication between technical and non-technical stakeholders. Passionate about driving efficient 
            workflows and delivering impactful digital products.
          </motion.p>

        </div>

        {/* RIGHT */}
        <motion.div
          className="flex-shrink-0 flex justify-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <TiltedCard
            imageSrc="/Alice.jpeg"
            altText="Alice Marybeth"
            captionText="Alice Marybeth"
            containerHeight="400px"
            imageHeight="320px"
            imageWidth="320px"
            scaleOnHover={1.05}
            rotateAmplitude={10}
            showMobileWarning={false}
            showTooltip={true}
          />
        </motion.div>

      </div>
    </section>
  );
}