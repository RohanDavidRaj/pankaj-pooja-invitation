"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const celebrationDate = new Date("2026-10-24T11:00:00+05:30").getTime();

function getTimeLeft() {
  const difference = celebrationDate - Date.now();
  if (difference <= 0) return null;

  return {
    Days: Math.floor(difference / 86400000),
    Hours: Math.floor((difference / 3600000) % 24),
    Minutes: Math.floor((difference / 60000) % 60),
    Seconds: Math.floor((difference / 1000) % 60)
  };
}

export default function Countdown() {
  // Start as undefined on both server and client — nothing to mismatch yet.
  const [timeLeft, setTimeLeft] = useState(undefined);

  useEffect(() => {
    // Runs only in the browser, after hydration — safe to touch Date.now() here.
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="paper-texture border-y border-[#b99161]/25 px-5 py-16 text-center text-ink sm:py-20">
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-xs font-bold uppercase tracking-[0.3em] text-[#a57548]">Counting down to our celebration</motion.p>
      {timeLeft === undefined ? (
        // Placeholder shown during SSR and the first client render — identical on both, so no mismatch.
        <div className="mx-auto mt-9 grid max-w-3xl grid-cols-4 gap-2 sm:gap-5">
          {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
            <div
              key={label}
              className="border border-[#b99161]/45 bg-[#fffaf0]/70 px-2 py-5 shadow-[0_12px_30px_rgba(106,73,49,.08)] sm:px-4 sm:py-7"
            >
              <p className="font-display text-4xl text-[#8f3b55] sm:text-6xl">00</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/60 sm:text-xs">{label}</p>
            </div>
          ))}
        </div>
      ) : timeLeft ? (
        <div className="mx-auto mt-9 grid max-w-3xl grid-cols-4 gap-2 sm:gap-5">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="border border-[#b99161]/45 bg-[#fffaf0]/70 px-2 py-5 shadow-[0_12px_30px_rgba(106,73,49,.08)] sm:px-4 sm:py-7"
            >
              <p className="font-display text-4xl text-[#8f3b55] sm:text-6xl">{String(value).padStart(2, "0")}</p>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/60 sm:text-xs">{label}</p>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="mt-7 font-display text-3xl text-[#8f3b55]">The Celebration Has Begun 🎉</p>
      )}
    </section>
  );
}
