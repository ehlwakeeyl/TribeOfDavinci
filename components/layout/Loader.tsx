"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLockBody } from "@/hooks/useLockBody";

export function Loader() {
  const [hidden, setHidden] = useState(false);
  useLockBody(!hidden);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1300);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-charcoal transition-all duration-[900ms] ease-reveal-out ${
        hidden ? "pointer-events-none invisible opacity-0" : "visible opacity-100"
      }`}
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={180}
        height={42}
        className="w-[180px] animate-in fade-in zoom-in-95 duration-[1600ms] brightness-0 invert"
      />
    </div>
  );
}
