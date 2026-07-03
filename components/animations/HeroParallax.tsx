"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP is reserved for this one scroll-linked effect (the hero background
 * drifting + gently scaling as the page scrolls past it) — everything else
 * on the page uses Framer Motion's whileInView, which is enough for
 * one-shot reveal animations and doesn't need a scrubbing timeline.
 */
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 22,
        scale: 1.08,
        ease: "none",
        scrollTrigger: {
          trigger: bgRef.current!.parentElement,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={bgRef} className="absolute -inset-x-[2%] -inset-y-[8%] will-change-transform">
      {children}
    </div>
  );
}
