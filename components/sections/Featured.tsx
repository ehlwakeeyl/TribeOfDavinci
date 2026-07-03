import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { featuredProject, whatsappLink } from "@/lib/projects";

export function Featured() {
  const p = featuredProject;

  return (
    <section id="featured" className="bg-cream py-24 md:py-[150px]">
      <div className="wrap">
        <div className="eyebrow">Project of the Month</div>
        <Reveal variant="scale">
          <div className="group grid grid-cols-1 items-center bg-white shadow-soft md:grid-cols-2">
            <div className="relative h-[340px] overflow-hidden md:h-full md:min-h-[520px]">
              <span className="absolute left-7 top-7 z-10 bg-gold px-[18px] py-[9px] text-[0.68rem] font-bold uppercase tracking-[0.2em] text-charcoal">
                Now Selling
              </span>
              <Image
                src="/images/hero-capri-2.jpg"
                alt={p.name}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-reveal-out group-hover:scale-[1.06]"
              />
            </div>

            <div className="px-7 py-11 md:px-[60px] md:py-[70px]">
              <h2 className="font-serif text-[clamp(2rem,3.4vw,3rem)] font-light">{p.name}</h2>
              <div className="mb-6 mt-1.5 text-[0.85rem] tracking-[0.05em] text-ink-soft">{p.location}</div>
              <p className="mb-8 text-[1.02rem] font-light text-ink-soft">{p.description}</p>

              <div className="mb-9 flex flex-wrap gap-10">
                <div>
                  <b className="block font-serif text-[2rem] font-normal text-gold-dark">{p.units}</b>
                  <span className="text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">Exclusive Homes</span>
                </div>
                <div>
                  <b className="block font-serif text-[2rem] font-normal text-gold-dark">{p.land}</b>
                  <span className="text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">Hectare Estate</span>
                </div>
                <div>
                  <b className="block font-serif text-[2rem] font-normal text-gold-dark">{p.types.length}</b>
                  <span className="text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">House Types</span>
                </div>
              </div>

              <div className="mb-9 flex flex-wrap gap-3">
                {p.types.map((t) => (
                  <span
                    key={t.name}
                    className="rounded-full border border-[#ddd3ba] px-4 py-2 text-[0.78rem] text-ink-soft"
                  >
                    {t.name} — {t.description}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                <Button asChild variant="gold">
                  <a href={p.sourceUrl} target="_blank" rel="noopener noreferrer">
                    Download Brochure
                  </a>
                </Button>
                <Button asChild variant="outline" className="text-ink">
                  <a
                    href={whatsappLink(`Hi, I'm interested in ${p.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get The Bilaad Advantage
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
