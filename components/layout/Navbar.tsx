"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";
import { useLockBody } from "@/hooks/useLockBody";
import { cn } from "@/lib/utils";
import { whatsappLink } from "@/lib/projects";

const links = [
  { href: "#advantage", label: "The Advantage" },
  { href: "#projects", label: "Our Projects" },
  { href: "#trust", label: "Sustainability" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const scrolled = useScrolled(80);
  const [open, setOpen] = useState(false);
  useLockBody(open);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[500] flex items-center justify-between px-[6vw] transition-all duration-500 ease-reveal-out",
        scrolled
          ? "bg-cream/90 py-4 shadow-[0_8px_30px_rgba(0,0,0,.06)] backdrop-blur-md"
          : "bg-transparent py-6"
      )}
    >
      <a href="#hero" aria-label="Bilaad Realty">
        <Image
          src="/images/logo.png"
          alt="Bilaad Realty"
          width={120}
          height={28}
          className={cn("h-[26px] w-auto transition-[filter] duration-500", !scrolled && "brightness-0 invert")}
          priority
        />
      </a>

      <nav
        className={cn(
          "flex items-center gap-9 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:w-[min(340px,84vw)] max-md:flex-col max-md:justify-center max-md:gap-7 max-md:bg-charcoal max-md:px-10 max-md:transition-transform max-md:duration-500 max-md:ease-reveal-out",
          open ? "max-md:translate-x-0" : "max-md:translate-x-full"
        )}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={close}
            className={cn(
              "relative text-[0.76rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-[400ms] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-[width] after:duration-[400ms] hover:after:w-full",
              scrolled ? "text-ink" : "text-white",
              "max-md:!text-white"
            )}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://vendor.bilaadnigeria.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className={cn(
            "text-[0.76rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-[400ms]",
            scrolled ? "text-ink" : "text-white",
            "max-md:!text-white"
          )}
        >
          Become a Vendor
        </a>
        <a
          href={whatsappLink("Hi, I'd like to know more about Bilaad Realty.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className={cn(
            "text-[0.76rem] font-semibold uppercase tracking-[0.14em] max-md:hidden",
            scrolled ? "text-ink" : "text-white"
          )}
        >
          WhatsApp Us →
        </a>
      </nav>

      <button
        aria-label="Menu"
        onClick={() => setOpen((v) => !v)}
        className="z-[600] hidden flex-col gap-[5px] max-md:flex"
      >
        {open ? (
          <X className={cn("h-6 w-6", scrolled ? "text-ink" : "text-white")} />
        ) : (
          <Menu className={cn("h-6 w-6", scrolled ? "text-ink" : "text-white")} />
        )}
      </button>
    </header>
  );
}
