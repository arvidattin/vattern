"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for scroll feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      // wheelMultiplier: 1, // Optional tweaking
    });

    // Request Animation Frame loop for Lenis
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
