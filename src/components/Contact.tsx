"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";
import { RevealGroup, RevealItem } from "./Reveal";
import { ContactButtons } from "./Buttons";

const ForestScene = dynamic(() => import("./ForestScene"), { ssr: false });

export default function Contact() {
  const reduced = useReducedMotion() ?? false;
  const [isMobile, setIsMobile] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    setMounted(true);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section id="kontakti" className="relative py-32 px-6 scroll-mt-20 overflow-hidden grain">
      <div className="absolute inset-0 opacity-25 mix-blend-soft-light">
        <Image src="/forest2.png" alt="" fill className="object-cover" aria-hidden="true" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,_#1d3526_0%,_#0c1711_60%)]" />

      {!isMobile && (
        <div className="absolute inset-y-0 right-0 w-1/2 opacity-70 pointer-events-none" aria-hidden="true">
          {mounted && <ForestScene variant="contact" reducedMotion={reduced} isMobile={isMobile} />}
        </div>
      )}

      <RevealGroup className="relative max-w-7xl mx-auto">
        <div className="max-w-xl">
          <RevealItem>
            <h2 className="text-4xl sm:text-6xl font-medium text-bone leading-[1.05] text-balance mb-6">
              Pastāstiet par savu mežu
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="text-mist text-lg leading-relaxed mb-10 max-w-prose">
              Atrašanās vieta un situācija ir viss, kas vajadzīgs sākumam. Atbildēšu ar
              skaidru piedāvājumu.
            </p>
          </RevealItem>
          <RevealItem>
            <ContactButtons />
          </RevealItem>
        </div>
      </RevealGroup>
    </section>
  );
}
