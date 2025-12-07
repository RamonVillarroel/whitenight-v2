import React from "react";
import { motion } from "framer-motion";

const demos = [
  {
    id: 1,
    title: "Artisan Boulanger",
    type: "Vitrine + Click & Collect",
    link: "/boulangerie.html", // Lien vers ton fichier uploadé
    gradient: "from-orange-900 to-black",
    color: "text-orange-400",
  },
  {
    id: 2,
    title: "Portfolio Photographe",
    type: "Site Immersif",
    link: "/photographe.html", // Lien vers ton fichier uploadé
    gradient: "from-neutral-800 to-black",
    color: "text-white",
  },
  {
    id: 3,
    title: "Salon UrbanCut",
    type: "Prise de RDV",
    link: "/coiffeur.html", // Lien vers ton fichier uploadé
    gradient: "from-blue-900 to-slate-900",
    color: "text-blue-400",
  },
];

export default function DemoShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-20">
      {demos.map((demo, i) => (
        <motion.a
          key={demo.id}
          href={demo.link}
          target="_blank"
          className="group relative h-[400px] w-full perspective-1000 block"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <div
            className={`w-full h-full bg-gradient-to-b ${demo.gradient} border border-white/10 rounded-2xl relative overflow-hidden flex flex-col justify-center items-center p-6 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2`}
          >
            {/* Tag Concept */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur text-[10px] font-bold px-3 py-1 rounded-full text-white border border-white/20">
              CONCEPT
            </div>

            {/* Titre en fond (Opacité faible) */}
            <span className="absolute text-5xl font-serif font-bold opacity-10 text-center pointer-events-none select-none">
              {demo.title.split(" ")[0]}
            </span>

            {/* Contenu Hover */}
            <div className="relative z-10 text-center transform transition-all duration-300 group-hover:scale-110">
              <h3 className="text-2xl font-serif text-white mb-2">
                {demo.title}
              </h3>
              <p
                className={`text-xs uppercase tracking-widest mb-6 ${demo.color}`}
              >
                {demo.type}
              </p>
              <span className="inline-block px-6 py-2 border border-white/30 rounded-full text-xs text-white uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                Voir la démo
              </span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
