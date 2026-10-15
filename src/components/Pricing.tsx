"use client";

import { RevealGroup, RevealItem, SectionTitle } from "./Reveal";
import TiltCard from "./TiltCard";
import { ContactButtons } from "./Buttons";

export default function Pricing() {
  return (
    <section id="cenas" className="relative py-28 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <SectionTitle kicker="Cenas" title="Vienkārši un droši" />
          <RevealGroup>
            <RevealItem>
              <p className="text-mist text-lg leading-relaxed max-w-prose -mt-6">
                Cena atkarīga no atrašanās vietas un apjoma. Pirmajai sarunai pietiek ar īsu
                aprakstu un atrašanās vietu.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>

        <RevealGroup className="lg:col-span-7">
          <RevealItem>
            <TiltCard className="rounded-[2rem] glass-strong" intensity={4}>
              <div className="p-8 sm:p-12">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <h3 className="text-3xl sm:text-4xl font-medium text-bone leading-tight">
                    Meža apskate un konsultācija
                  </h3>
                  <span className="shrink-0 inline-flex items-center px-4 py-1.5 rounded-full border border-resin/50 text-resin-2 text-sm">
                    Pēc vienošanās
                  </span>
                </div>
                <p className="text-mist text-lg leading-relaxed mb-8 max-w-prose">
                  Iedošu skaidru piedāvājumu pēc pirmās sarunas, bez slēptām izmaksām un
                  saistībām.
                </p>
                <ContactButtons />
              </div>
            </TiltCard>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
