import { Reveal } from "@/components/animations/Reveal";
import { Counter } from "@/components/animations/Counter";
import { projects, totalUnits } from "@/lib/projects";

export function StatsBand() {
  return (
    <section id="statsband" className="bg-gold py-16">
      <div className="wrap grid grid-cols-2 gap-y-10 text-center md:grid-cols-4 md:gap-5">
        <Reveal>
          <Stat value={projects.length} label="Signature Developments" />
        </Reveal>
        <Reveal delay={0.1}>
          <Stat value={totalUnits} label="Homes Designed" />
        </Reveal>
        <Reveal delay={0.2}>
          <Stat value={8} label="Prime Districts, Abuja FCT" />
        </Reveal>
        <Reveal delay={0.3}>
          <Stat value={100} suffix="%" label="Sustainability Focused" />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  return (
    <div>
      <b className="block font-serif text-[clamp(2rem,4vw,3.2rem)] font-normal text-charcoal">
        <Counter target={value} suffix={suffix} />
      </b>
      <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-charcoal/72">{label}</span>
    </div>
  );
}
