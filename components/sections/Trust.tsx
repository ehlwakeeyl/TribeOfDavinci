import Image from "next/image";
import { Reveal } from "@/components/animations/Reveal";

const badges = ["SDG 2030 Aligned", "Alternative Power", "Green Landscaping", "Community First"];

export function Trust() {
  return (
    <section id="trust" className="overflow-hidden bg-charcoal-2 py-24 text-white md:py-[150px]">
      <div className="wrap grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative h-[320px] w-full md:h-[480px]">
            <Image
              src="/images/proj-borabora.jpg"
              alt="Bilaad sustainable community"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="eyebrow">Bilaad Development Trust</div>
          <h2 className="mb-6 font-serif text-[clamp(2rem,3.6vw,3rem)] font-light text-white">
            Corporate values, translated into community action.
          </h2>
          <p className="mb-5 font-light text-white/62">
            Through the Bilaad Development Trust, we advance sustainability
            initiatives aligned with the UN Sustainable Development Goals
            2030 — turning our commitment to people and planet into
            measurable, community-focused impact.
          </p>
          <p className="mb-5 font-light text-white/62">
            Every estate we deliver is a step toward the sustainable cities
            of tomorrow: energy-conscious, community-driven and built to
            last.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            {badges.map((b) => (
              <span
                key={b}
                className="border border-white/25 px-4 py-2.5 text-[0.7rem] uppercase tracking-[0.1em] text-gold-light"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
