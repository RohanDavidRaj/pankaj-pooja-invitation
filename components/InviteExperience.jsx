"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Countdown from "./Countdown";
import Hero from "./Hero";
import SplashScreen from "./SplashScreen";
import Venue from "./Venue";
import BackgroundMusic from "./BackgroundMusic";

export default function InviteExperience({ nameFirst, nameSecond, phoneDisplay, phoneHref }) {
  const [hasEntered, setHasEntered] = useState(false);
  const musicRef = useRef(null);
  const venueRef = useRef(null);

  const handleEnter = () => {
    setHasEntered(true);
    musicRef.current?.play(); // same tap that opens the invite also starts the music
  };

  useEffect(() => {
    if (!hasEntered) return;

    // Step 1 — after 1s, nudge down a little so the guest notices there's more below.
    const peekTimer = setTimeout(() => {
      window.scrollTo({ top: 160, behavior: "smooth" });
    }, 1000);

    // Step 2 — 1 more second after that (2s total), continue scrolling down to the venue/location section.
    const venueTimer = setTimeout(() => {
      venueRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 2000);

    return () => {
      clearTimeout(peekTimer);
      clearTimeout(venueTimer);
    };
  }, [hasEntered]);

  return (
    <main>
      <AnimatePresence>
        {!hasEntered && <SplashScreen onEnter={handleEnter} nameFirst={nameFirst} nameSecond={nameSecond} />}
      </AnimatePresence>
      <BackgroundMusic ref={musicRef} src="/invitation-assets/krrish-flute.mp3" />
      <Hero
        isVisible={hasEntered}
        nameFirst={nameFirst}
        nameSecond={nameSecond}
        phoneDisplay={phoneDisplay}
        phoneHref={phoneHref}
      />
      <Countdown />
      <div ref={venueRef}>
        <Venue />
      </div>
    </main>
  );
}