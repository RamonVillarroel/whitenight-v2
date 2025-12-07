import React, { useState } from "react";
import { motion } from "framer-motion";

const team = [
  {
    id: 1,
    name: "Ramon",
    role: "Fullstack & UI/UX",
    quote: "L'architecture avant le code.",
    skills: ["React", "Node.js", "System Design"],
    color: "bg-neutral-900",
  },
  {
    id: 2,
    name: "Paul",
    role: "Fullstack & UI/UX",
    quote: "Le pixel parfait ou rien.",
    skills: ["WebGL", "Tailwind", "Motion"],
    color: "bg-neutral-800",
  },
  {
    id: 3,
    name: "Milan",
    role: "Fullstack & UI/UX",
    quote: "Performance et scalabilité.",
    skills: ["Docker", "Next.js", "Secu"],
    color: "bg-neutral-900",
  },
];

export default function TeamAccordion() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleInteraction = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full px-4 md:px-20">
      {team.map((member) => (
        <motion.div
          key={member.id}
          onMouseEnter={() => setActiveId(member.id)}
          onMouseLeave={() => setActiveId(null)}
          onClick={() => handleInteraction(member.id)}
          className={`relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer ${member.color}`}
          animate={{
            flex: activeId === member.id ? 3 : 1,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end h-full z-10">
            {/* Initiale Géante */}
            <span className="absolute -top-4 -right-4 text-[8rem] md:text-[12rem] font-serif text-white/5 pointer-events-none select-none">
              {member.name.charAt(0)}
            </span>

            <motion.div>
              <h3
                className={`text-3xl md:text-4xl font-serif text-white mb-1 ${
                  activeId === member.id ? "text-accent" : ""
                }`}
              >
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-4 opacity-80">
                {member.role}
              </p>

              <motion.div
                initial={false}
                animate={{
                  opacity: activeId === member.id ? 1 : 0,
                  height: activeId === member.id ? "auto" : 0,
                  marginTop: activeId === member.id ? 16 : 0,
                }}
                className="overflow-hidden"
              >
                <p className="text-sm text-gray-300 italic mb-4">
                  "{member.quote}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-1 border border-white/20 text-[10px] rounded bg-white/5 text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
