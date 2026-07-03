import Image from "next/image";
import { whatsappLink } from "@/lib/projects";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-10 pt-24 text-white/65">
      <div className="wrap grid grid-cols-1 gap-11 border-b border-white/10 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/images/logo.png"
            alt="Bilaad Realty"
            width={140}
            height={32}
            className="mb-5 h-[26px] w-auto brightness-0 invert"
          />
          <p className="max-w-[34ch] text-[0.92rem] font-light">
            Sustainable cities, built with the future in mind. Blending
            timeless architecture with eco-friendly features across Abuja,
            Nigeria.
          </p>
        </div>

        <FooterCol title="Explore">
          <FooterLink href="#advantage">The Advantage</FooterLink>
          <FooterLink href="#projects">Our Projects</FooterLink>
          <FooterLink href="#trust">Sustainability</FooterLink>
          <FooterLink href="#contact">Contact Us</FooterLink>
        </FooterCol>

        <FooterCol title="Partner With Us">
          <FooterLink href="https://vendor.bilaadnigeria.com/" external>
            Become a Vendor
          </FooterLink>
          <FooterLink href="https://bilaadnigeria.com/become-an-affiliate/" external>
            Become an Affiliate
          </FooterLink>
          <FooterLink href="https://www.bilaadnigeria.com/blog/" external>
            Blog
          </FooterLink>
        </FooterCol>

        <FooterCol title="Contact">
          <li>No 47 ML Wushishi Crescent, Utako, Abuja</li>
          <FooterLink href="tel:+2347002222111">(+234) 700-222-2111</FooterLink>
          <FooterLink href={whatsappLink("Hi, I'd like to know more about Bilaad Realty.")} external>
            WhatsApp Us
          </FooterLink>
        </FooterCol>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-3.5 pt-8 text-[0.78rem]">
        <span>© 2026 Bilaad Realty. All rights reserved.</span>
        <span>Designed for sustainable living.</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white">{title}</h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="link-underline text-[0.9rem] font-light transition-colors duration-300 hover:text-gold-light"
      >
        {children}
      </a>
    </li>
  );
}
