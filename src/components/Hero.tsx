"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ContactButtons } from "./Buttons";

const ForestScene = dynamic(() => import("./ForestScene"), { ssr: false });

const TITLE = "Meža apsaimniekošanas konsultācijas un meža darbu organizēšana";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    setMounted(true);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const words = TITLE.split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden grain"
      aria-label="Ievads"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_#1d3526_0%,_#0c1711_55%,_#0c1711_100%)]" />
      <div className="absolute inset-0 opacity-30 mix-blend-soft-light">
        <Image src="/forest1.png" alt="" fill className="object-cover" priority aria-hidden="true" />
      </div>

      {/* 3D */}
      <div className="absolute inset-0 lg:left-[30%]" aria-hidden="true">
        {mounted && (
          <ForestScene scroll={scrollYProgress} variant="hero" reducedMotion={reduced} isMobile={isMobile} />
        )}
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-night pointer-events-none" />

      {/* Copy */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 pt-[50svh] pb-16 lg:pt-44 lg:pb-32 min-h-[100svh] flex flex-col justify-end lg:justify-center"
      >
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lichen text-sm sm:text-lg mb-4"
          >
            Godīgs un saprotams padoms pirms ciršanas un kopšanas
          </motion.p>

          <h1 className="text-[2.15rem] leading-[1.05] sm:text-6xl lg:text-7xl font-medium text-bone text-balance mb-6">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.28em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-mist text-[15px] sm:text-lg leading-relaxed max-w-prose mb-8"
          >
            SIA &ldquo;Meži&rdquo; nodrošina meža apsaimniekošanas konsultācijas un nepilnu
            700&nbsp;ha meža zemes apsaimniekošanu, ievērojot caurspīdīgus darba principus,
            atklātu informācijas apriti un īpašnieka interešu prioritāti katrā lēmumā.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <ContactButtons />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll hint */}
      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2 text-mist-2 text-xs"
          aria-hidden="true"
        >
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-transparent via-lichen to-transparent"
          />
        </motion.div>
      )}
    </section>
  );
}
