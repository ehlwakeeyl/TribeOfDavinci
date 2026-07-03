import { Reveal } from "@/components/animations/Reveal";

const pillars = [
  {
    num: "01",
    title: "Prime Locations",
    body: "Every estate sits within Abuja's most sought-after districts — Lifecamp, Maitama, Katampe, Jabi, Wuye, Gwarinpa and Mabushi — minutes from the city centre, airport road and everyday conveniences.",
  },
  {
    num: "02",
    title: "Timeless Architecture",
    body: "Designed with renowned architectural partners, each home balances bold contemporary form with interiors built for real, everyday family life.",
  },
  {
    num: "03",
    title: "Sustainable by Design",
    body: "Solar-powered street lighting, alternative power supply, automated sprinkler systems and centralised gas networks — engineered to reduce cost of living and environmental impact.",
  },
  {
    num: "04",
    title: "Smart & Secure Communities",
    body: "24/7 CCTV surveillance, automated gate access control, intercom systems and high-speed fibre-optic connectivity across every estate we build.",
  },
  {
    num: "05",
    title: "Strong Returns",
    body: "Backed by investment advisory and project management expertise, every Bilaad home is structured to deliver exceptional living and dependable returns on investment.",
  },
];

export function Advantage() {
  return (
    <section id="advantage" className="bg-charcoal py-24 text-white md:py-[140px]">
      <div className="wrap">
        <Reveal className="mb-16 max-w-[640px] md:mb-24">
          <div className="eyebrow">The Bilaad Advantage</div>
          <h2 className="font-serif text-[clamp(2.1rem,4.2vw,3.4rem)] font-light text-white">
            Every detail, built with the future in mind.
          </h2>
          <p className="mt-5 text-[1.02rem] font-light text-white/60">
            From prime locations that connect you to what matters, to
            communities engineered for comfort, security and sustainability —
            this is the standard behind every Bilaad address.
          </p>
        </Reveal>

        <div>
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.05}>
              <div
                className={`grid grid-cols-1 items-center gap-3.5 border-t border-white/10 py-11 md:grid-cols-[70px_1fr_1fr] md:gap-12 ${
                  i === pillars.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="font-serif text-[1.1rem] text-gold">{p.num}</div>
                <h3 className="font-serif text-[clamp(1.6rem,2.6vw,2.3rem)] font-light text-white">
                  {p.title}
                </h3>
                <p className="max-w-[44ch] text-[0.98rem] font-light text-white/62">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
