"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the page has scrolled past `threshold`, used to toggle the
 * header from a transparent hero overlay to a solid, blurred bar — the same
 * pattern springs.estate uses on its own fixed nav.
 */
export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
