"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BackgroundMusic = forwardRef(function BackgroundMusic({ src = "/invitation-assets/krrish-flute.mp3" }, ref) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Expose play()/pause() so a parent (e.g. the splash-screen tap) can start
  // music directly inside its own click handler — this keeps it tied to the
  // same user gesture, which browsers require for audio-with-sound to start.
  useImperativeHandle(ref, () => ({
    play: () => {
      const audio = audioRef.current;
      if (!audio) return;
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    },
    pause: () => {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  }));

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    // Muted autoplay is always allowed — harmless fallback, does nothing audible.
    audio.muted = true;
    audio.play().catch(() => {});
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.muted = false;
      audio.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const barVariants = {
    playing: (i) => ({
      scaleY: [0.3, 1, 0.5, 0.9, 0.3],
      transition: { duration: 0.9 + i * 0.15, repeat: Infinity, ease: "easeInOut" }
    })
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />

      <motion.button
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        whileTap={{ scale: 0.9 }}
        animate={
          isPlaying
            ? { boxShadow: ["0 8px 20px rgba(97,55,43,.35)", "0 8px 28px rgba(143,59,85,.55)", "0 8px 20px rgba(97,55,43,.35)"] }
            : { boxShadow: "0 8px 20px rgba(97,55,43,.35)" }
        }
        transition={isPlaying ? { duration: 1.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0.3 }}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#8f3b55] text-[#fff9e9]"
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div key="bars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-4 items-end gap-[3px]">
              {[0, 1, 2, 3].map((i) => (
                <motion.span key={i} custom={i} variants={barVariants} animate="playing" className="block w-[3px] origin-bottom rounded-full bg-[#fff9e9]" style={{ height: "16px" }} />
              ))}
            </motion.div>
          ) : (
            <motion.svg key="note" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
});

export default BackgroundMusic;