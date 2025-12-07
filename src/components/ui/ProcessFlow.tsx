import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Immersion",
    desc: "Audit technique & UX. On définit la cible.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "Choix de la stack (Astro/React). Maquettes.",
  },
  {
    num: "03",
    title: "Code Pur",
    desc: "Développement artisanal. Pas de constructeur de page.",
  },
  {
    num: "04",
    title: "Livraison",
    desc: "Déploiement Netlify. Rapide, sécurisé, éternel.",
  },
];

export default function ProcessFlow() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative max-w-3xl mx-auto pl-10 md:pl-0"
    >
      {/* La ligne grise de fond */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 h-full" />

      {/* La ligne BLEUE qui se remplit au scroll */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-0 md:left-1/2 top-0 w-px bg-accent shadow-[0_0_15px_#3b82f6] -translate-x-1/2 z-10 origin-top"
      />

      <div className="space-y-24 py-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Point Central */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border border-white/20 rounded-full z-20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 animate-pulse" />
            </div>

            {/* Contenu */}
            <div className="w-full md:w-1/2 p-6 border border-white/5 bg-surface/50 backdrop-blur-sm rounded-xl hover:border-accent/30 transition-colors duration-500">
              <span className="text-4xl font-serif text-white/10 absolute top-4 right-6 font-bold">
                {step.num}
              </span>
              <h3 className="text-xl font-bold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>

            {/* Espace vide pour l'équilibre */}
            <div className="w-1/2 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
