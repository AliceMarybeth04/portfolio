"use client";

const skills = [
  { name: "HTML", icon: "🌐" },
  { name: "CSS", icon: "🎨" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🗄️" },
];

const doubled = [...skills, ...skills];

export default function SkillsMarquee() {
  return (
    <section className="w-full py-8 overflow-hidden relative">

      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Label */}
      <p className="text-center text-blue-400 text-xl tracking-widest uppercase mb-8">
        Tech Stack
      </p>

      {/* Row 1 — left */}
      <div className="flex overflow-hidden mb-4">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-left">
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 text-white/70 hover:text-blue-300 text-sm rounded-full transition-all duration-300 cursor-default"
            >
              <span>{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — right */}
      <div className="flex overflow-hidden">
        <div className="flex gap-6 whitespace-nowrap animate-marquee-right">
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 text-white/70 hover:text-blue-300 text-sm rounded-full transition-all duration-300 cursor-default"
            >
              <span>{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}