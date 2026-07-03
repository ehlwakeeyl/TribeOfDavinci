import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted so the site never depends on a third-party font CDN at runtime.
const fraunces = localFont({
  src: [
    { path: "./fonts/fraunces-normal.woff2", weight: "300 600", style: "normal" },
    { path: "./fonts/fraunces-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = localFont({
  src: [{ path: "./fonts/manrope.woff2", weight: "300 800", style: "normal" }],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bilaad Realty — Building Sustainable Cities",
  description:
    "Bilaad Realty designs homes built for more than just today — blending timeless architecture with eco-friendly features across 15 signature developments in Abuja, Nigeria.",
  icons: { icon: "/images/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
