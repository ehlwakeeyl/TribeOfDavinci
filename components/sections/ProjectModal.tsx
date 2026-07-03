"use client";

import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/projects";
import { whatsappLink } from "@/lib/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!project} onOpenChange={(v) => !v && onClose()}>
      {project && (
        <DialogContent>
          <div className="relative h-[220px] overflow-hidden sm:h-[340px]">
            <Image src={project.image} alt={project.name} fill className="object-cover" />
          </div>
          <div className="px-6 pb-10 pt-9 sm:px-[50px] sm:pb-[54px] sm:pt-[46px]">
            <div className="mb-2.5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-gold-dark">
              {project.location}
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3.4vw,2.6rem)] font-light">{project.name}</h2>
            <div className="mb-6 mt-1 font-serif text-[1.05rem] italic text-ink-soft">{project.tagline}</div>
            <p className="mb-7 font-light text-ink-soft">{project.description}</p>

            <div className="mb-7 flex flex-wrap gap-9">
              <Stat value={project.units} label="Homes" />
              {project.land && <Stat value={project.land} label="Land Size" />}
              <Stat value={project.types.length} label={`House Type${project.types.length > 1 ? "s" : ""}`} />
            </div>

            <div className="mb-8 grid gap-3.5">
              {project.types.map((t) => (
                <div key={t.name} className="border border-[#ddd3ba] px-5 py-4">
                  <b className="mb-1.5 block font-serif font-medium text-ink">{t.name}</b>
                  <span className="text-[0.9rem] font-light text-ink-soft">{t.description}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3.5">
              <Button asChild variant="gold">
                <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              </Button>
              <Button asChild variant="outline" className="text-ink">
                <a
                  href={whatsappLink(`Hi, I'm interested in ${project.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}

function Stat({ value, label }: { value: string | number; label: string }) {
  return (
    <div>
      <b className="block font-serif text-[1.7rem] font-normal text-gold-dark">{value}</b>
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.1em] text-ink-soft">{label}</span>
    </div>
  );
}
