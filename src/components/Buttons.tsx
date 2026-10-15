"use client";

import { motion } from "motion/react";
import { CONTACT, PhoneIcon, WhatsAppIcon } from "./Icons";

export function ContactButtons({ align = "start" }: { align?: "start" | "center" }) {
  return (
    <div
      className={`flex flex-col sm:flex-row gap-3 ${align === "center" ? "justify-center" : ""}`}
    >
      <motion.a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="glow-whatsapp inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-whatsapp text-night font-semibold transition-shadow"
      >
        <WhatsAppIcon />
        Rakstīt WhatsApp
      </motion.a>
      <motion.a
        href={CONTACT.phoneHref}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="glass inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-bone font-medium hover:border-lichen/40 transition-colors"
      >
        <PhoneIcon />
        {CONTACT.phoneDisplay}
      </motion.a>
    </div>
  );
}
