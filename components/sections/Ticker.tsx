import { projects } from "@/lib/projects";

export function Ticker() {
  const names = [...projects.map((p) => p.name), ...projects.map((p) => p.name)];

  return (
    <div className="relative overflow-hidden whitespace-nowrap border-y border-white/10 bg-charcoal py-4">
      {/* animate-marquee / hover-pause defined in styles/animations.css — the
          list above is rendered twice so the -50% loop point is seamless. */}
      <div className="animate-marquee inline-flex gap-12">
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
