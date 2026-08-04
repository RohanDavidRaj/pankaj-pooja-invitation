"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

const detailReveal = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export default function Hero({
  isVisible,
  nameFirst = "Komal",
  nameSecond = "Suyash",
  phoneDisplay = "7972529935 / 9403123453",
  phoneHref = "tel:7972529935"
}) {
  return (
    <section id="celebration" className="relative h-dvh overflow-hidden bg-[#fff5df] px-3 py-2 sm:h-auto sm:min-h-dvh sm:overflow-x-hidden sm:px-10 sm:py-16">
      <motion.div
        variants={reveal}
        initial="hidden"
        animate={isVisible ? "show" : "hidden"}
        transition={{ duration: 0.85, delay: 0.25 }}
        className="relative mx-auto flex h-full max-w-2xl items-center justify-center sm:h-auto"
      >
        <article className="relative w-full overflow-hidden rounded-[1.6rem] border border-[#b98a5a]/30 bg-[#fff9e9] p-1.5 shadow-[0_24px_70px_rgba(97,55,43,.22)] sm:rounded-[2.2rem] sm:p-3">
          <Image src="/invitation-assets/lotus-invitation-frame.jpeg" alt="Lotus floral invitation frame" fill priority unoptimized sizes="(max-width: 768px) 100vw, 672px" className="object-fill opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#fff9e9]/10 via-[#fff9e9]/65 to-[#fff9e9]/15" />
          <motion.div
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.45 } } }}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="relative border border-[#bb966e]/45 px-3 py-3 text-center sm:px-12 sm:py-11"
          >
            <motion.div initial={{ opacity: 0, y: -110, scale: 0.8 }} animate={isVisible ? { opacity: 1, scale: 1, y: [0, -8, 0], rotate: [0, 1.5, 0] } : {}} transition={{ opacity: { duration: 0.6, delay: 0.2 }, scale: { duration: 0.7, delay: 0.2, type: "spring", stiffness: 120 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} className="relative z-10 mx-auto mb-0 h-[clamp(2.6rem,9dvh,6rem)] w-[clamp(2.6rem,9dvh,6rem)] sm:h-44 sm:w-44">
              <Image src="/invitation-assets/ganesha-lotus.png" alt="Lord Ganesha seated on a lotus" fill priority unoptimized sizes="176px" className="object-contain drop-shadow-[0_12px_12px_rgba(134,72,72,.2)]" />
            </motion.div>
            <motion.p variants={detailReveal} className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#725d4e] sm:text-xs sm:tracking-[0.28em]">Together with their families</motion.p>
            <motion.h1 variants={detailReveal} whileHover={{ scale: 1.03 }} className="mt-1 font-display text-2xl italic leading-none text-[#562d32] sm:mt-5 sm:text-7xl">{nameFirst} <span className="text-[#b99161]">&</span> {nameSecond}</motion.h1>
            <motion.p variants={detailReveal} className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-[#725d4e] sm:mt-6 sm:text-sm">Delighted to announce their engagement</motion.p>
            <motion.div variants={detailReveal} className="mx-auto my-1.5 flex items-center justify-center gap-2 text-[#b99161] sm:my-7 sm:gap-3"><span className="h-px w-8 bg-current sm:w-12" />✦<span className="h-px w-8 bg-current sm:w-12" /></motion.div>
            <motion.div variants={detailReveal} className="grid grid-cols-3 items-center gap-1 text-ink sm:gap-3">
              <p className="text-[7px] font-bold uppercase tracking-wider sm:text-xs">Friday</p>
              <p className="border-x border-[#b99161]/60 px-1 font-display text-sm leading-tight text-[#8f3b55] sm:px-2 sm:text-2xl"><span className="block text-2xl sm:text-6xl">14</span>August<br />2026</p>
              <p className="text-[7px] font-bold uppercase leading-4 tracking-wider sm:text-xs">11:00 AM<br />Onwards</p>
            </motion.div>
            <motion.p variants={detailReveal} className="mt-1.5 text-[10px] leading-4 text-ink/80 sm:mt-7 sm:text-sm sm:leading-7">Your presence will make this occasion even more special.</motion.p>
            <motion.p variants={detailReveal} className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-[#a57548] sm:mt-5 sm:text-xs">Venue</motion.p>
            <motion.p variants={detailReveal} className="mt-0.5 font-display text-sm leading-4 text-[#8f3b55] sm:mt-2 sm:text-2xl sm:leading-8">Chhappan Bhog<br />Chhatrapati Sambhaji Nagar</motion.p>
            <motion.div initial={{ opacity: 0, y: 100, scale: 0.86 }} animate={isVisible ? { opacity: 1, scale: 1, y: [0, -4, 0] } : {}} transition={{ opacity: { duration: 0.65, delay: 1 }, scale: { duration: 0.75, delay: 1, type: "spring", stiffness: 120 }, y: { duration: 3.8, repeat: Infinity, ease: "easeInOut" } }} className="relative z-10 mx-auto mt-1 h-[clamp(3.5rem,14dvh,8rem)] w-full max-w-[10rem] sm:mt-5 sm:max-w-sm">
              <Image src="/invitation-assets/engagement-logo.png" alt="Komal and Suyash engagement illustration" fill unoptimized sizes="(max-width: 640px) 288px, 384px" className="object-contain object-bottom drop-shadow-[0_18px_15px_rgba(87,46,42,.18)]" />
            </motion.div>
            <motion.p variants={detailReveal} className="mt-0.5 text-[9px] text-ink/80 sm:mt-2 sm:text-sm">With best compliments from <span className="font-display text-sm text-[#8f3b55] sm:text-xl">Family</span></motion.p>
            <motion.a variants={detailReveal} href={phoneHref} className="mt-1 inline-block text-[9px] font-bold text-[#8f3b55] transition hover:text-[#5b2935] sm:mt-5 sm:text-sm">☎ {phoneDisplay}</motion.a>
          </motion.div>
        </article>
      </motion.div>
    </section>
  );
}