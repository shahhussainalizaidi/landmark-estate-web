"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.08 });
    let id = 0;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    // parallax: layers marked data-speed move at different rates
    const layers = document.querySelectorAll<HTMLElement>("[data-speed]");
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      layers.forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        el.style.transform = `translate3d(0,${(r.top - innerHeight / 2) * -Number(el.dataset.speed)}px,0)`;
      });
    });
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);
  return null;
}
