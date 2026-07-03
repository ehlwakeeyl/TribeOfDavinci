"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/Reveal";
import { ProjectModal } from "@/components/sections/ProjectModal";
import { projects, type Project } from "@/lib/projects";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-[150px]">
      <div className="wrap">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-7 md:mb-[70px]">
          <div>
            <div className="eyebrow">Our Projects</div>
            <h2 className="max-w-[16ch] font-serif text-[clamp(2.1rem,4.2vw,3.4rem)] font-light">
              Fifteen destinations. One standard of living.
            </h2>
          </div>
          <p className="max-w-[38ch] font-light text-ink-soft">
            Each Bilaad development takes its name and spirit from the
            world&rsquo;s most desirable islands — reimagined as secure,
            sustainable communities across Abuja.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <RevealItem key={p.slug}>
              <button
                onClick={() => setActive(p)}
                className="group block w-full text-left"
                aria-haspopup="dialog"
              >
                <div className="relative h-[300px] overflow-hidden bg-cream-2 sm:h-[340px]">
                  <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#14110d]/75 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-[1000ms] ease-reveal-out group-hover:scale-[1.09] group-hover:brightness-[0.8]"
                  />
                  <span className="absolute bottom-6 left-6 z-[2] flex translate-y-2.5 items-center gap-2.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
                <div className="py-5">
                  <div className="mb-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-gold-dark">
                    {p.location}
                  </div>
                  <h3 className="font-serif text-2xl font-normal">{p.name}</h3>
                  <div className="mt-1.5 text-[0.82rem] text-ink-soft">
                    {p.units} Homes{p.land ? ` · ${p.land}` : ""}
                  </div>
                </div>
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
