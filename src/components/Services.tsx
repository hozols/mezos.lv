"use client";

import { RevealGroup, RevealItem, SectionTitle } from "./Reveal";
import TiltCard from "./TiltCard";

const SERVICES = [
  {
    title: "Meža apskate un situācijas izvērtējums",
    points: [
      "Ko darīt tagad un ko labāk atlikt",
      "Galveno risku (vējš, sniegs, kaitēkļi, kvalitāte) novērtējums",
      "Ieteikumi par ciršanas un kopšanas secību",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Krājas kopšanas ieteikumi un plāns",
    points: [
      "Prioritātes 1–3 gadiem",
      "Ko kopt, lai palielinātu vērtību un pieaugumu",
      "Praktiski ieteikumi izpildei (darbu apjoms, termiņi, loģika)",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11m0 0 4-4m-4 4-4-4m4-4v4M5 21h14" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-2.5 0-4 1.5-4 3.5S10 10 12 10s4-1.5 4-3.5S14.5 3 12 3Z" />
      </svg>
    ),
  },
  {
    title: "Sagatavošana ciršanai un procesu skaidrojums",
    points: [
      "Kā pareizi sagatavoties darbam, lai nav pārsteigumu",
      "Kas ir būtiski līgumā un uzskaitē (caurspīdība, sortimenti, uzmērīšana)",
      "Ieteikumi par darbu organizāciju un kontroli",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 15h6M9 9h3m4.5 11.25H7.5A2.25 2.25 0 0 1 5.25 18V6A2.25 2.25 0 0 1 7.5 3.75h6.879a1.5 1.5 0 0 1 1.06.44l2.871 2.87a1.5 1.5 0 0 1 .44 1.061V18a2.25 2.25 0 0 1-2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Sadarbības modelis",
    text:
      "Ja pēc konsultācijas nolemjat cirst, varu palīdzēt ar darbu organizēšanu vai piedāvāt sadarbību. Lēmums vienmēr paliek jūsu ziņā.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5 10.5 8l3 3L17 7.5M4 20l4.5-4.5M20 20l-4.5-4.5M12 20v-6" />
      </svg>
    ),
    highlight: true,
  },
];

export default function Services() {
  return (
    <section id="pakalpojumi" className="relative py-28 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle kicker="Pakalpojumi" title="Ko es piedāvāju" />

        <RevealGroup className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <RevealItem key={s.title} className="h-full">
              <TiltCard className={`h-full rounded-3xl ${s.highlight ? "glass-strong" : "glass"}`}>
                <div className="p-8 sm:p-10 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-moss/40 border border-lichen/15 text-lichen flex items-center justify-center mb-7">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-medium text-bone leading-snug mb-5 text-balance">{s.title}</h3>
                  {s.points ? (
                    <ul className="space-y-3 text-mist leading-relaxed">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-[0.7em] w-1.5 h-1.5 rounded-full bg-resin shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-mist leading-relaxed">{s.text}</p>
                  )}
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
