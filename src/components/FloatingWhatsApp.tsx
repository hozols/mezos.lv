"use client";

import { motion } from "motion/react";
import { CONTACT, WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="glow-whatsapp fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-night flex items-center justify-center"
      aria-label="Rakstīt WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </motion.a>
  );
}
