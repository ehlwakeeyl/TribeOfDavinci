"use client";

import { useState, type FormEvent } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/projects";

const socials = [
  { icon: Facebook, href: "https://www.facebook.com/BilaadRealty", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/BilaadRealty", label: "Twitter/X" },
  { icon: Instagram, href: "https://www.instagram.com/bilaadrealty", label: "Instagram" },
  { icon: Linkedin, href: "https://vendor.bilaadnigeria.com/", label: "LinkedIn" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 2600);
  };

  return (
    <section id="contact" className="bg-cream py-24 md:py-[150px]">
      <div className="wrap grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="eyebrow">Get In Touch</div>
          <h2 className="mb-6 font-serif text-[clamp(2.1rem,4vw,3.2rem)] font-light">
            Let&rsquo;s build your next address.
          </h2>
          <p className="mb-11 max-w-[42ch] font-light text-ink-soft">
            Book a tour, request a brochure, or speak with our advisory team
            — we&rsquo;re here to help you find the right Bilaad home.
          </p>

          <InfoRow k="Visit">
            No 47 ML Wushishi Crescent, Utako, Abuja
            <br />
            Adjacent CBN Quarters
          </InfoRow>
          <InfoRow k="Call">
            <a href="tel:+2347002222111" className="hover:text-gold-dark">
              (+234) 700-222-2111
            </a>
          </InfoRow>
          <InfoRow k="WhatsApp" last>
            <a
              href={whatsappLink("Hi, I'd like to know more about Bilaad Realty.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-dark"
            >
              +234 913 342 3363
            </a>
          </InfoRow>

          <div className="mt-9 flex gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink transition-all duration-[400ms] hover:-translate-y-0.5 hover:border-charcoal hover:bg-charcoal hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <form onSubmit={onSubmit} className="grid gap-[18px] bg-white p-8 shadow-card sm:p-12">
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              <Field label="First Name" id="fname" placeholder="Your first name" required />
              <Field label="Last Name" id="lname" placeholder="Your last name" required />
            </div>
            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              <Field label="Email Address" id="email" type="email" placeholder="you@email.com" required />
              <Field label="Phone Number" id="phone" type="tel" placeholder="+234" />
            </div>
            <div>
              <label htmlFor="inquiry" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Inquiry Type
              </label>
              <select
                id="inquiry"
                className="w-full border-0 border-b border-[#d8cfb8] bg-transparent py-2.5 text-[0.95rem] focus:border-gold focus:outline-none"
              >
                <option>Customer Support</option>
                <option>Book a Tour</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
                Message
              </label>
              <textarea
                id="message"
                maxLength={180}
                placeholder="How can we help? (max 180 characters)"
                className="min-h-[90px] w-full resize-y border-0 border-b border-[#d8cfb8] bg-transparent py-2.5 text-[0.95rem] focus:border-gold focus:outline-none"
              />
            </div>
            <Button type="submit" variant="gold" className="w-full sm:w-auto">
              {sent ? "Message Sent ✓" : "Send Message"}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function InfoRow({ k, children, last }: { k: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`flex gap-5 border-t border-[#ddd3ba] py-5 ${last ? "border-b" : ""}`}>
      <div className="w-[120px] shrink-0 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold-dark">{k}</div>
      <div>{children}</div>
    </div>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.12em] text-ink-soft">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full border-0 border-b border-[#d8cfb8] bg-transparent py-2.5 text-[0.95rem] focus:border-gold focus:outline-none"
      />
    </div>
  );
}
