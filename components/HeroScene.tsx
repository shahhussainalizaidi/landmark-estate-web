"use client";
import dynamic from "next/dynamic";
// Loaded client-side only, after first paint, so SEO text and LCP stay fast.
const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });
export default function HeroScene() {
  return <Hero3D />;
}
