import { projects } from "@/lib/projects";

export function Ticker() {
  const names = [...projects.map((p) => p.name), ...projects.map((p) => p.name)];

  return (
    <div className="group relative overflow-hidden whitespace-nowrap border-y border-white/10 bg-charcoal py-4">
      <div className="inline-flex animate-ticker gap-12 group-hover:[animation-play-state:paused]">
        {names.map((name, i) => (
          <span key={i} className="font-serif text-base italic tracking-wide text-gold-light/85">
            {name}
            <span className="ml-12 font-sans not-italic text-gold">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
