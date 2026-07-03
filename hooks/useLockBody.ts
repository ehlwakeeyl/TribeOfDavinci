"use client";

import { useEffect } from "react";

/** Locks body scroll while `locked` is true — used by the mobile nav and the project modal. */
export function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    document.body.classList.add("lock");
    return () => document.body.classList.remove("lock");
  }, [locked]);
}
