"use client";

import { motion } from "framer-motion";

export default function SplashScreen({ onEnter, nameFirst = "Pankaj", nameSecond = "Pooja" }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#4a2630] px-6 text-center text-cream"
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.65 }}
    >
      <div className="absolute -left-10 -top-8 text-[9rem] opacity-15 floral-orbit">✿</div>
      <div className="absolute -bottom-12 -right-4 text-[12rem] opacity-10 floral-orbit [animation-delay:-3s]">✿</div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#e8c77b]">A sacred celebration</p>
        <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full border border-[#e8c77b]/50 text-5xl shadow-[0_0_60px_rgba(232,199,123,.18)]">ॐ</div>
        <h1 className="font-display text-5xl italic sm:text-6xl">{nameFirst} <span className="not-italic text-[#e8c77b]">&</span> {nameSecond}</h1>
        <div className="mx-auto my-8 h-px w-24 bg-[#e8c77b]/70" />

        <motion.div
          className="relative inline-block"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Pulsing glow ring behind the button */}
          <motion.span
            className="absolute inset-0 rounded-full bg-[#e8c77b]/40"
            animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <button
            onClick={onEnter}
            className="relative rounded-full border border-[#e8c77b] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] transition hover:bg-[#e8c77b] hover:text-[#4a2630] focus:outline-none focus:ring-2 focus:ring-[#e8c77b] focus:ring-offset-4 focus:ring-offset-[#4a2630]"
          >
            Enter invitation
          </button>
        </motion.div>

        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#e8c77b]/70"
        >
          Tap to open ✦
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
