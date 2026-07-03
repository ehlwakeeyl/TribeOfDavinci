import { Reveal } from "@/components/animations/Reveal";

export function Mission() {
  return (
    <section id="mission" className="bg-cream py-24 md:py-[150px]">
      <div className="wrap grid grid-cols-1 gap-14 md:grid-cols-[0.9fr_1.4fr] md:gap-[70px]">
        <Reveal>
          <blockquote className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] font-light leading-[1.32]">
            &ldquo;The roadmap to sustainable living is inevitably an{" "}
            <span className="italic text-gold-dark">interesting journey</span> — it
            serves as a template for all our endeavours.&rdquo;
            <cite className="mt-7 block text-[0.85rem] not-italic text-ink-soft">
              Dr. Emmanuel Bassi Usman — Chief Executive Officer, Bilaad Realty
            </cite>
          </blockquote>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-4 text-[1rem] font-light text-ink-soft">
            <p>
              <strong className="font-semibold text-ink">Bilaad Realty</strong>{" "}
              is a Nigerian real estate development firm shaping sustainable
              communities across the residential, commercial and industrial
              sectors.
            </p>
            <p>
              Our approach is a dialogue between people, place and purpose —
              structures rooted in sustainability, guided by vision, and
              delivered through alternative financing, strategic partnerships
              and streamlined value chains for the cities of the future.
            </p>
            <p>
              Through <strong className="font-semibold text-ink">advisory services</strong>,
              we pair deep industry knowledge with client-focused strategy to
              deliver profitable, well-managed developments from concept to
              completion.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
