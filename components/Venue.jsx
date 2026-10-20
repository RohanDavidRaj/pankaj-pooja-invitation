"use client";

import { motion } from "framer-motion";

const mapLink = "https://maps.app.goo.gl/6Phdf4uh6bF2M34M9";

export default function Venue() {
  return (
    <section className="paper-texture px-5 py-16 text-center sm:py-20">
      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-xl border border-gold/50 bg-cream/80 p-3 shadow-card">
        <div className="border border-gold/50 px-6 py-11 sm:px-12">
          <p className="text-4xl">⌖</p>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">Venue</p>
          <h2 className="mt-4 font-display text-4xl text-rose">Radha krishna mandir</h2>
          <p className="mt-2 text-sm leading-7 text-ink/75">Chhatrapati Sambhaji Nagar(Aurangabad)</p>
          <a href={mapLink} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-rose px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-[#ad5664]">Get directions</a>
        </div>
      </motion.div>
    </section>
  );
}
