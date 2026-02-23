"use client";

import { useEffect } from "react";

const THRESHOLD = 160;
const POLL_MS = 500;

function isDevToolsOpen(): boolean {
  if (typeof window === "undefined") return false;
  const widthDiff = window.outerWidth - window.innerWidth;
  const heightDiff = window.outerHeight - window.innerHeight;
  return widthDiff > THRESHOLD || heightDiff > THRESHOLD;
}

function setDevToolsState(open: boolean) {
  if (typeof document === "undefined") return;
  const html = document.documentElement;
  if (open) {
    html.setAttribute("data-devtools-open", "true");
  } else {
    html.removeAttribute("data-devtools-open");
  }
}

export function DevToolsDetect() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDevToolsState(isDevToolsOpen());
    }, POLL_MS);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F12") setDevToolsState(true);
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === "I")
        setDevToolsState(true);
      if ((e.metaKey || e.ctrlKey) && e.altKey && e.key === "i")
        setDevToolsState(true);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("keydown", handleKeyDown);
      setDevToolsState(false);
    };
  }, []);

  return null;
}
