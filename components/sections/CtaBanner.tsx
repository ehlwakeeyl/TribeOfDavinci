import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <Reveal className="bg-gradient-to-br from-[#241f18] to-[#3a3123] px-[6vw] py-24 text-white md:py-[110px]">
        <h3 className="mb-4 font-serif text-[clamp(1.7rem,2.8vw,2.4rem)] font-light">Become a Vendor</h3>
        <p className="mb-8 max-w-[36ch] font-light text-white/85">
          Partner with Bilaad Realty and grow your business alongside
          Nigeria&rsquo;s fastest-rising sustainable developer.
        </p>
        <Button asChild variant="outlineDark">
          <a href="https://vendor.bilaadnigeria.com/" target="_blank" rel="noopener noreferrer">
            Get Started
          </a>
        </Button>
      </Reveal>

      <Reveal className="bg-gradient-to-br from-gold-dark to-gold px-[6vw] py-24 text-white md:py-[110px]">
        <h3 className="mb-4 font-serif text-[clamp(1.7rem,2.8vw,2.4rem)] font-light">Become an Affiliate</h3>
        <p className="mb-8 max-w-[36ch] font-light text-white/85">
          Earn commission introducing clients to Bilaad&rsquo;s signature
          island-inspired developments across Abuja.
        </p>
        <Button asChild variant="outlineDark">
          <a href="https://bilaadnigeria.com/become-an-affiliate/" target="_blank" rel="noopener noreferrer">
            Join The Programme
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
