import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    // Fluid breakpoint rhythm observed on springs.estate's own stylesheet
    // (568 / 668 / 980 / 1200 / 1440 / 1920px), remapped onto Tailwind's scale.
    screens: {
      xs: "568px",
      sm: "668px",
      md: "980px",
      lg: "1200px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        // Brand palette sampled directly from the Bilaad Realty logo (gold
        // #bc9633 / grey #808080), standing in for springs.estate's own
        // dark-green / beige duotone while keeping the same light-bg +
        // dark-accent structure.
        gold: {
          DEFAULT: "#bc9633",
          light: "#d9bd75",
          dark: "#8f721f",
        },
        grey: "#808080",
        charcoal: {
          DEFAULT: "#1b1814",
          2: "#28241e",
        },
        cream: {
          DEFAULT: "#f7f2e8",
          2: "#efe6d3",
        },
        ink: {
          DEFAULT: "#221f1a",
          soft: "#5a5650",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      // border-radius steps lifted from springs.estate's global.css
      borderRadius: {
        xs: "3px",
        sm: "10px",
        md: "20px",
        lg: "30px",
      },
      // Easing curves extracted verbatim from springs.estate/assets/stylesheets/global.css
      transitionTimingFunction: {
        "reveal-out": "cubic-bezier(0.25,0.74,0.22,0.99)",
        "smooth-in-out": "cubic-bezier(0.645,0.045,0.355,1)",
        "quad-in-out": "cubic-bezier(0.55,0,0.1,1)",
      },
      boxShadow: {
        soft: "0 40px 90px -30px rgba(30,25,15,.25)",
        card: "0 30px 70px -30px rgba(30,25,15,.2)",
        modal: "0 60px 120px rgba(0,0,0,.5)",
      },
      // Continuous decorative loops (marquee, scroll cue) are defined as plain
      // CSS utility classes in styles/animations.css instead of here — see
      // that file for why. One-shot reveal animations live in Framer Motion
      // (components/animations/Reveal.tsx), so Tailwind's own keyframes/
      // animation config is intentionally left empty.
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
