"use client";

import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { cn } from "@/lib/utils";

export function BackToTop() {
  const show = useScrolled(900);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-7 right-7 z-[400] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-charcoal text-white transition-all duration-[400ms] hover:-translate-y-1 hover:bg-gold",
        show ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
