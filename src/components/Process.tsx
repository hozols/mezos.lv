"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { SectionTitle } from "./Reveal";

const STEPS = [
  { title: "Īsa sākotnējā saruna", text: "10–15 minūtes: īpašuma atrašanās vieta, mērķis un steidzamība." },
  { title: "Apskate dabā", text: "Mērījumi un meža stāvokļa novērtējums." },
  { title: "Kopsavilkums un ieteikumi", text: "Skaidri un saprotami formulēti ieteikumi: ko darīt, ko nedarīt un kāpēc." },
  { title: "Sarežģītāku jautājumu risināšana", text: "Tiek nodrošināta atbilstošas profesionālās kompetences iesaiste." },
];

function Step({ i, title, text }: { i: number; title: string; text: string }) {
  return (
    <motion.li
      initial={{ opacity: 0.25, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
      transition={{ duration: 0.5 }}
      className="relative pl-20 sm:pl-28 py-8 group"
    >
      <motion.span
        initial={{ scale: 0.6, backgroundColor: "rgba(46,90,58,0.5)" }}
        whileInView={{ scale: 1, backgroundColor: "rgba(224,164,88,1)" }}
        viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
        transition={{ duration: 0.5 }}
        className="absolute left-[18px] sm:left-[26px] top-[2.55rem] w-3 h-3 rounded-full ring-8 ring-night"
      />
      <span className="absolute left-0 top-7 font-display text-5xl sm:text-6xl text-lichen/25 tabular-nums select-none" aria-hidden="true">
        {i + 1}
      </span>
      <h3 className="text-2xl sm:text-3xl font-medium text-bone mb-2">{title}</h3>
      <p className="text-mist text-lg leading-relaxed max-w-prose">{text}</p>
    </motion.li>
  );
}

export default function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="process" className="relative py-28 px-6 scroll-mt-20 bg-night-2">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,_rgba(46,90,58,0.25),_transparent_60%)] pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <SectionTitle kicker="Process" title="Kā es strādāju" />

        <ol ref={ref} className="relative">
          <span className="absolute left-[23px] sm:left-[31px] top-10 bottom-10 w-px bg-lichen/15" aria-hidden="true" />
          <motion.span
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-[23px] sm:left-[31px] top-10 bottom-10 w-px bg-gradient-to-b from-resin via-resin to-lichen"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Step key={s.title} i={i} {...s} />
          ))}
        </ol>
      </div>
    </section>
  );
}
