"use client";

import React from "react";
import ColorBends from "./ColorBends";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">

      {/* Hero Content */}
      <div className="flex flex-col items-center text-center text-white px-4 gap-6">

        {/* Greeting */}
        <p className="text-lg tracking-widest uppercase text-blue-300">
          Welcome to my portfolio
        </p>

        {/* Name */}
        <h1 className="text-6xl md:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-300">Alice Marybeth</span>
        </h1>

        {/* Role */}
        <p className="text-2xl md:text-3xl font-light text-white/80">
          Full Stack Developer
        </p>

        {/* Short bio */}
        <p className="max-w-xl text-white/60 text-base md:text-lg leading-relaxed">
          I build beautiful, fast, and scalable web applications — 
          from pixel-perfect frontends to robust backends.
        </p>


      </div>
    </section>
  );
}