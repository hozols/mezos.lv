"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { CONTACT, PhoneIcon } from "./Icons";

const LINKS = [
  { href: "#pakalpojumi", label: "Pakalpojumi" },
  { href: "#process", label: "Kā strādāju" },
  { href: "#cenas", label: "Cenas" },
  { href: "#kontakti", label: "Kontakti" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 32);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-night/70 backdrop-blur-xl border-b border-lichen/10 py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="SIA Meži sākums">
          <Image
            src="/logo.png"
            alt=""
            width={44}
            height={44}
            className="w-11 h-11 object-contain rounded-full transition-transform duration-500 group-hover:rotate-6"
            priority
          />
          <span className="font-display text-lg text-bone tracking-tight">SIA Meži</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-mist hover:text-bone transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-resin after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={CONTACT.phoneHref}
          className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-bone hover:border-lichen/40 transition-colors"
        >
          <PhoneIcon className="w-4 h-4" />
          <span className="hidden sm:inline">{CONTACT.phoneDisplay}</span>
          <span className="sm:hidden">Zvanīt</span>
        </a>
      </div>
    </motion.nav>
  );
}
