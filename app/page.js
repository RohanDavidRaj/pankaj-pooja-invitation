"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Countdown from "../components/Countdown";
import Hero from "../components/Hero";
import SplashScreen from "../components/SplashScreen";
import Venue from "../components/Venue";
import BackgroundMusic from "../components/BackgroundMusic";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const musicRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    musicRef.current?.play(); // same tap that opens the invite also starts the music
  };

  return (
    <main>
      <AnimatePresence>
        {!hasEntered && <SplashScreen onEnter={handleEnter} />}
      </AnimatePresence>
      <BackgroundMusic ref={musicRef} src="/invitation-assets/song.mp3" />
      <Hero isVisible={hasEntered} />
      <Countdown />
      <Venue />
    </main>
  );
}